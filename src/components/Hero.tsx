'use client';
import Image from 'next/image';
import ImageSrc from '@/assets/images/devs.jpg';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const InfoAnimationVariants = {
	hidden: { opacity: 0, x: -1000 },
	visible: { opacity: 1, x: 0 }
};

const ImageAnimationVariants = {
	hidden: { opacity: 0, x: 1000 },
	visible: { opacity: 1, x: 0 }
};

export default function Hero() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const inViewControl = useAnimation();

	useEffect(() => {
		if (isInView) inViewControl.start('visible');
	}, [isInView]);

	return (
		<section
			ref={ref}
			className='lg:min-h-screen flex flex-col lg:flex-row justify-around items-center text-white gap-10 lg:gap-0'
		>
			<motion.h1
				variants={InfoAnimationVariants}
				initial='hidden'
				animate={inViewControl}
				transition={{ duration: 1, delay: 0.7 }}
				className='order-2 lg:order-1 w-full lg:w-[30rem] text-[2.5rem] leading-10 lg:text-[4rem] lg:leading-[4.875rem] font-bold'
			>
				a front-end developer bringing your ideas into life.
			</motion.h1>

			<motion.div
				variants={ImageAnimationVariants}
				initial='hidden'
				animate={inViewControl}
				transition={{ duration: 1, delay: 0.5 }}
				className='order-1 lg:order-2 max-w-[500px] max-h-[500px] mx-auto lg:mx-0 rounded-lg overflow-hidden'
			>
				<Image
					alt='hero image'
					src={ImageSrc}
					className='w-full h-full object-cover'
				/>
			</motion.div>
		</section>
	);
}
