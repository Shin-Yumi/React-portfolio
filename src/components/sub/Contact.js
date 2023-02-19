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

		emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};
	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption}>
			<section id='contact'>
				<div className='contactImg'></div>
				<div className='contactBox'>
					<form method='post' id='contactForm'>
						<div className='formBox'>
							<label htmlFor='contactName'>Your name</label>
							<input name='contactName' id='contactName' type='text' placeholder='name' />
						</div>
						<div className='formBox'>
							<label htmlFor='contactName'>Your Phone</label>
							<input name='contactPhone' id='contactPhone' type='text' placeholder='Phone-number' />
						</div>
						<div className='formBox'>
							<label htmlFor='contactName'>Your Email</label>
							<input name='contactEmail' id='contactEmail' type='email' placeholder='Email' />
						</div>
						<div className='formBox'>
							<label htmlFor='contactName'>Your Message</label>
							<textarea
								name='contactMsg'
								id='contactMsg'
								cols='5'
								rows='5'
								placeholder='Your Message'
							></textarea>
						</div>
						<div className='formBox'>
							<input className='submit' value='submit' type='submit' />
						</div>
					</form>
				</div>
			</section>
		</Layout>
	);
}

export default Contact;
