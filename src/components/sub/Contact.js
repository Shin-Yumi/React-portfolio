import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
	const name = 'Contact';
	const title = 'Contact';
	const subTitle = '연락하기';
	const expCaption =
		'If you are interested in our portfolio, please email me! Vogue와의 협업을 원하시면 메일을 보내주세요!';

	const form = useRef();
	const initValue = {
		name: '',
		phone: '',
		email: '',
		message: '',
	};

	const [values, setValues] = useState(initValue);
	const [Err, setErr] = useState({});
	const Submit = useRef(false);
	const [send, setSend] = useState(false);

	const check = (value) => {
		const errs = {};
		const phoneRule = /^(070|02|010|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4}$/;

		if (value.name.length < 2) {
			errs.name = '이름을 2글자 이상 입력하세요';
		}
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '이메일은 8글자 이상 @를 포함하세요';
		}
		if (!phoneRule.test(value.phone)) {
			errs.phone = '핸드폰 번호는 하이픈("-")없이 정확히 입력해주세요';
		}
		if (value.message.length < 1) {
			errs.message = '남기실 말씀을 적어주세요';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	useEffect(() => {
		if (Object.keys(Err).length === 0) {
			if (Submit.current) {
				setSend(true);
			}
		}
	}, [Err]);

	const sendEmail = (e) => {
		e.preventDefault();
		setErr(check(values));
		if (send) {
			emailjs
				.sendForm('service_a67ezzs', 'template_g0rfbw9', form.current, 'smXrTUT7qtrtDtUhx')
				.then(
					(result) => {
						alert('전송되었습니다.');
					},
					(error) => {
						alert('전송을 실패했습니다.');
					}
				);
			form.current.reset();
		}
	};
	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption}>
			<section id='contact'>
				<div className='contactImg'></div>
				<div className='contactBox'>
					<form ref={form} onSubmit={sendEmail} id='contactForm'>
						<div className='formBox'>
							<label htmlFor='contactName'>Your name</label>
							<input
								name='name'
								id='contactName'
								type='text'
								placeholder='이름을 입력하세요'
								onChange={handleChange}
							/>
							<p className='err'>{Err.name}</p>
						</div>
						<div className='formBox'>
							<label htmlFor='contactName'>Your Phone</label>
							<input
								name='phone'
								id='contactPhone'
								type='text'
								placeholder='핸드폰 번호를 입력하세요'
								onChange={handleChange}
							/>
							<p className='err'>{Err.phone}</p>
						</div>
						<div className='formBox'>
							<label htmlFor='contactName'>Your Email</label>
							<input
								name='email'
								id='contactEmail'
								type='email'
								placeholder='Email을 입력하세요'
								onChange={handleChange}
							/>
							<p className='err'>{Err.email}</p>
						</div>
						<div className='formBox'>
							<label htmlFor='contactName'>Your Message</label>
							<textarea
								name='message'
								id='contactMsg'
								cols='5'
								rows='5'
								placeholder='Message를 입력하세요'
								onChange={handleChange}
							></textarea>
							<p className='err'>{Err.message}</p>
						</div>
						<div className='formBox'>
							<input
								className='submit'
								value='Send'
								type='submit'
								onClick={() => (Submit.current = true)}
							/>
						</div>
					</form>
				</div>
			</section>
		</Layout>
	);
}

export default Contact;