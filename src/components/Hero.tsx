'use client';
import Image from 'next/image';
import ImageSrc from '@/assets/images/devs.jpg';
import { useEffect, useRef } from 'react';
import {
	AnimatePresence,
	motion,
	useAnimation,
	useInView
} from 'framer-motion';
import AnimateSection from './AnimateSection';

const InfoAnimationVariants = {
	hidden: { opacity: 0, x: -1000 },
	visible: { opacity: 1, x: 0 }
};

// const ImageAnimationVariants = {
// 	hidden: { opacity: 0, x: 1000 },
// 	visible: { opacity: 1, x: 0 }
// };

const ImageAnimationVariants = {
	hidden: { opacity: 0, y: '100vh' },
	visible: { opacity: 1, y: 0 }
};

const containerVars = {
	initial: {
		transition: {
			staggerChildren: 0.09,
			staggerDirection: -1
		}
	},
	open: {
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.09,
			staggerDirection: 1
		}
	}
};
const mobileLinkVars = {
	initial: {
		y: '100vh',
		transition: {
			duration: 0.5,
			delay: 0.5,
			ease: [0.37, 0, 0.63, 1]
		}
	},
	open: {
		y: 0,
		transition: {
			ease: [0, 0.55, 0.45, 1],
			duration: 0.7,
			delay: 0.5
		}
	}
};

export default function Hero() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const inViewControl = useAnimation();

	useEffect(() => {
		if (isInView) inViewControl.start('visible');
		if (isInView) inViewControl.start('open');
	}, [isInView]);

	return (
		<section
			ref={ref}
			className='lg:min-h-screen flex flex-col lg:flex-row justify-around items-center text-white gap-10 lg:gap-0'
		>
			<AnimateSection>
				<h1 className='order-2 lg:order-1 w-full lg:w-[30rem] text-[2.5rem] leading-10 lg:text-[4rem] lg:leading-[4.875rem] font-bold'>
					a front-end developer bringing your ideas into life.
				</h1>
			</AnimateSection>

			<motion.div
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
			</motion.div>
		</section>
	);
}

{
	/* original */
}
{
	/* <motion.h1
				variants={InfoAnimationVariants}
				initial='hidden'
				animate={inViewControl}
				transition={{ duration: 1, delay: 0.7 }}
				className='order-2 lg:order-1 w-full lg:w-[30rem] text-[2.5rem] leading-10 lg:text-[4rem] lg:leading-[4.875rem] font-bold'
			>
				a front-end developer bringing your ideas into life.
			</motion.h1> */
}
