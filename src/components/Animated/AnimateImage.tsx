'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

const ImageAnimationVariants = {
	hidden: { opacity: 0, y: '100vh' },
	visible: { opacity: 1, y: 0 }
};

interface AnimateImageProps {
	imageSrc: StaticImageData;
}

export default function AnimateImage({ imageSrc }: AnimateImageProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const inViewControl = useAnimation();

	useEffect(() => {
		if (isInView) inViewControl.start('visible');
	}, [isInView]);

	return (
		<div ref={ref}>
			<motion.div
				variants={ImageAnimationVariants}
				initial='hidden'
				animate={inViewControl}
				transition={{ duration: 1, delay: 0.5 }}
				className='order-1 lg:order-2 max-w-[550px] max-h-[600px] mx-auto lg:mx-0 rounded-lg overflow-hidden'
			>
				<Image
					alt='hero image'
					src={imageSrc}
					className='w-full h-full object-cover'
				/>
			</motion.div>
		</div>
	);
}
