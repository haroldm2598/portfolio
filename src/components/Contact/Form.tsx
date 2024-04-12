'use client';
import { FormEvent, useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

interface ErrorProps {
	email?: string;
	message?: string;
}

export default function Form() {
	// for emailjs
	const form = useRef(null);

	// for form validation
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState<ErrorProps>({});
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		validationForm();
	}, [email, message]);

	const validationForm = () => {
		let errors: ErrorProps = {};

		if (!email) {
			errors.email = 'Email is Required';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = 'Email is Invalid';
		}

		if (!message) {
			errors.message = 'Message is Required';
		}

		setErrors(errors);
		setIsFormValid(Object.keys(errors).length === 0);
	};

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isFormValid) {
			emailjs
				.sendForm('service_tme1csf', 'template_c5pbfap', e.currentTarget, {
					publicKey: 'tG_sSm5v_yCYkInUH'
				})
				.then(
					() => {
						console.log('SUCCESS!');
					},
					(error) => {
						console.log('FAILED...', error.text);
					}
				);
		} else {
			console.log('please correct the form');
		}
	};
	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className='max-w-[40rem] mx-auto my-10 [&>*]:mb-4'
		>
			<input
				type='text'
				placeholder='name'
				name='from_name'
				className='input input-bordered w-full max-w-full'
			/>

			{errors.email && (
				<p className='text-red-400 text-sm mb-1'>{errors.email}</p>
			)}
			<input
				type='text'
				placeholder='email'
				name='to_name'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='input input-bordered w-full max-w-full'
			/>

			{errors.message && (
				<p className='text-red-400 text-sm mb-1'>{errors.message}</p>
			)}
			<textarea
				className='textarea textarea-bordered w-full text-base'
				placeholder='send a message...'
				name='message'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			></textarea>
			<button
				className={`w-full btn btn-warning text-white uppercase rounded-lg ${
					!isFormValid ? 'btn-disabled' : ''
				}`}
				disabled={!isFormValid}
			>
				submit
			</button>
		</form>
	);
}

// ORIGINAL FORM
// <div className='max-w-[40rem] mx-auto my-10 [&>*]:mb-4'>
// 	<input
// 		type='text'
// 		placeholder='name'
// 		className='input input-bordered w-full max-w-full'
// 	/>
// 	<input
// 		type='text'
// 		placeholder='email'
// 		className='input input-bordered w-full max-w-full'
// 	/>
// 	<textarea
// 		className='textarea textarea-bordered w-full text-base'
// 		placeholder='send a message...'
// 	></textarea>
// 	<button className='w-full btn btn-warning text-white uppercase rounded-lg'>
// 		submit
// 	</button>
// </div>
