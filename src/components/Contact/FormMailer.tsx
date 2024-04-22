'use client';
import { useForm } from 'react-hook-form';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendContactForm } from '@/lib/api/api';

import 'react-toastify/dist/ReactToastify.css';

const schema = z.object({
	name: z.string(),
	email: z
		.string()
		.min(2, 'Email is required')
		.email('Email format is not valid'),
	message: z.string().min(2, 'Message is required')
});

interface FormProps {
	name?: string;
	email: string;
	message: string;
}

export default function FormMailer() {
	const formValues = useForm<FormProps>({
		defaultValues: {
			name: '',
			email: '',
			message: ''
		},
		resolver: zodResolver(schema)
	});
	const { register, handleSubmit, formState } = formValues;
	const { errors, isDirty, isValid } = formState;

	const sendEmail = async (data: FormProps) => {
		try {
			await sendContactForm(data);
			toast.success('Success Message', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
				transition: Bounce
			});
		} catch (error) {
			console.log(error);
			toast.warning('Message Failed');
		}
	};

	return (
		<>
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
				transition={Bounce}
			/>
			<form
				className='max-w-[40rem] mx-auto mb-10 [&>*]:mb-4'
				onSubmit={handleSubmit(sendEmail)}
			>
				<input
					type='text'
					placeholder='name'
					className='input input-bordered w-full max-w-full'
					{...register('name')}
				/>

				<input
					type='text'
					placeholder='email'
					className='input input-bordered w-full max-w-full'
					{...register('email')}
				/>
				{errors.email?.message && (
					<p className='text-red-400 text-sm mb-2'>{errors.email?.message}</p>
				)}

				<textarea
					className='textarea textarea-bordered w-full text-base'
					placeholder='send a message...'
					{...register('message')}
				></textarea>
				{errors.message?.message && (
					<p className='text-red-400 text-sm mb-2'>{errors.message?.message}</p>
				)}

				<button
					className='w-full btn bg-veryBlue hover:bg-black text-white uppercase rounded-lg dark:border-none dark:hover:bg-blue-400'
					disabled={!isDirty || !isValid}
				>
					submit
				</button>
			</form>
		</>
	);
}
