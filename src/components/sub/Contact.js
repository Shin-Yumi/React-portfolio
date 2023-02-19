import Layout from '../common/Layout';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
	const name = 'Contact';
	const title = 'Contact';
	const subTitle = '연락하기';
	const expCaption =
		'If you are interested in our portfolio, please email me! Vogue와의 협업을 원하시면 메일을 보내주세요!';

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_a67ezzs", "template_g0rfbw9", form.current, "smXrTUT7qtrtDtUhx").then(
			(result) => {
				alert("전송되었습니다.");
			},
			(error) => {
				alert("전송을 실패했습니다.");
			}
		);
	};
	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption}>
			<section id='contact'>
				<div className='contactImg'></div>
				<div className='contactBox'>
					<form ref={form} onSubmit={sendEmail} id='contactForm'>
						<div className='formBox'>
							<label htmlFor='contactName'>Your name</label>
							<input name='name' id='contactName' type='text' placeholder='name' />
						</div>
						<div className='formBox'>
							<label htmlFor='contactName'>Your Phone</label>
							<input name='phone' id='contactPhone' type='text' placeholder='Phone-number' />
						</div>
						<div className='formBox'>
							<label htmlFor='contactName'>Your Email</label>
							<input name='email' id='contactEmail' type='email' placeholder='Email' />
						</div>
						<div className='formBox'>
							<label htmlFor='contactName'>Your Message</label>
							<textarea
								name='message'
								id='contactMsg'
								cols='5'
								rows='5'
								placeholder='Your Message'
							></textarea>
						</div>
						<div className='formBox'>
							<input className='submit' value="Send" type='submit' />
						</div>
					</form>
				</div>
			</section>
		</Layout>
	);
}

export default Contact;
