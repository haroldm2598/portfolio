import AnimateSection from '../ui/Animated/AnimateSection';
import TitleSection from '../TitleSection';

export default function Contact() {
	return (
		<section id='contact' className='my-20 mx-0 lg:mx-16 lg:h-full'>
			<AnimateSection>
				<TitleSection title='get in touch' />
			</AnimateSection>

			<AnimateSection>
				<div className='max-w-[40rem] mx-auto my-10 [&>*]:mb-4'>
					<input
						type='text'
						placeholder='name'
						className='input input-bordered w-full max-w-full'
					/>
					<input
						type='text'
						placeholder='email'
						className='input input-bordered w-full max-w-full'
					/>
					<textarea
						className='textarea textarea-bordered w-full'
						placeholder='send a message...'
					></textarea>
					<button className='w-full btn btn-warning text-white uppercase rounded-lg'>
						submit
					</button>
				</div>
			</AnimateSection>
		</section>
	);
}
