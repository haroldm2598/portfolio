'use client';
import AnimateParagraph from '../ui/Animated/AnimateParagraph';

export default function HeroTest() {
	return (
		<section className='h-96 lg:min-h-screen my-20 lg:my-16 lg:mx-16 flex flex-col lg:flex-row justify-center items-center'>
			<div>
				<AnimateParagraph
					className='w-full lg:max-w-5xl text-center text-veryDarkGray text-[2.5rem] leading-10 lg:text-[4rem] lg:leading-[4.875rem] font-bold'
					text={`A front-end developer bringing your ideas into life.`}
					once={true}
				/>
			</div>
		</section>
	);
}
