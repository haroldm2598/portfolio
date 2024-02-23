import AnimateSection from '../Animated/AnimateSection';
import TitleSection from '../TitleSection';

export default function Contact() {
	return (
		<section id='contact' className='my-20 lg:h-full'>
			<AnimateSection>
				<TitleSection title='get in touch' />
			</AnimateSection>

			<AnimateSection>
				<div className='max-w-[40rem] mx-auto [&>*]:mb-4'>
					<input
						type='text'
						placeholder='name'
						className='input input-bordered w-full max-w-full'
					/>
					<input
						type='text'
						placeholder='name'
						className='input input-bordered w-full max-w-full'
					/>
					<textarea
						className='textarea textarea-bordered w-full'
						placeholder='Message....'
					></textarea>
					<button className='w-full btn btn-warning text-white uppercase rounded-full'>
						submit
					</button>
				</div>
			</AnimateSection>
		</section>
	);
}
