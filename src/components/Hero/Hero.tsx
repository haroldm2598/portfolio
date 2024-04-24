'use client';

import AnimateParagraph from '../ui/Animated/AnimateParagraph';
import { SparklesCore } from '../ui/AnimatedComponents/Sparkles';

export default function HeroTest() {
	return (
		<section className='relative h-96 lg:min-h-screen my-20 lg:my-16 lg:mx-16 flex flex-col lg:flex-row justify-center items-center'>
			<div>
				<div className='w-full absolute inset-0  h-96 lg:h-screen'>
					<SparklesCore
						background='transparent'
						minSize={0.6}
						maxSize={1.4}
						particleDensity={100}
						className='w-full h-full'
						particleColor='#219ebc'
					/>
				</div>
				<AnimateParagraph
					className='w-full lg:max-w-5xl text-center text-veryDarkGray dark:text-greyWhite text-[2.5rem] leading-10 lg:text-[4rem] lg:leading-[4.875rem] font-bold'
					text='A front-end developer bringing your ideas into life.'
					once={true}
				/>
			</div>
		</section>
	);
}
