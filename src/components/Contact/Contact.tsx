'use client';
import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimateSection from '../ui/Animated/AnimateSection';
import TitleSection from '../TitleSection';

export default function Contact() {
	const form = useRef(null);

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

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
	};

	return (
		<section id='contact' className='my-20 mx-0 lg:mx-16 lg:h-full'>
			<AnimateSection>
				<TitleSection title='get in touch' />
			</AnimateSection>

			<AnimateSection>
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
					<input
						type='text'
						placeholder='email'
						name='to_name'
						className='input input-bordered w-full max-w-full'
					/>
					<textarea
						className='textarea textarea-bordered w-full text-base'
						placeholder='send a message...'
						name='message'
					></textarea>
					<button className='w-full btn btn-warning text-white uppercase rounded-lg'>
						submit
					</button>
				</form>
			</AnimateSection>
		</section>
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
