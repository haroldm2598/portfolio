'use client';

import ImageSrc from '@/assets/images/devs.jpg';

import AnimateSection from '../Animated/AnimateSection';
import AnimateImage from '../Animated/AnimateImage';

export default function Hero() {
	return (
		<section className='lg:min-h-screen my-16 flex flex-col lg:flex-row justify-around items-center text-white gap-10 lg:gap-0'>
			<AnimateSection>
				<h1 className='order-2 lg:order-1 w-full lg:w-[30rem] text-[2.5rem] leading-10 lg:text-[4rem] lg:leading-[4.875rem] font-bold'>
					a front-end developer bringing your ideas into life.
				</h1>
			</AnimateSection>

			<AnimateImage imageSrc={ImageSrc} />
		</section>
	);
}

/* original */

/* <motion.h1
				variants={InfoAnimationVariants}
				initial='hidden'
				animate={inViewControl}
				transition={{ duration: 1, delay: 0.7 }}
				className='order-2 lg:order-1 w-full lg:w-[30rem] text-[2.5rem] leading-10 lg:text-[4rem] lg:leading-[4.875rem] font-bold'
			>
				a front-end developer bringing your ideas into life.
			</motion.h1> */

/* <motion.div
				variants={ImageAnimationVariants}
				initial='hidden'
				animate={inViewControl}
				transition={{ duration: 1, delay: 0.5 }}
				className='order-1 lg:order-2 max-w-[550px] max-h-[600px] mx-auto lg:mx-0 rounded-lg overflow-hidden'
			>
				<Image
					alt='hero image'
					src={ImageSrc}
					className='w-full h-full object-cover'
				/>
			</motion.div> */
