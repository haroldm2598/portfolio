'use client';
import { useRef, useEffect } from 'react';
import {
	motion,
	AnimatePresence,
	useAnimation,
	useInView
} from 'framer-motion';

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

export default function AnimateSection({
	children
}: Readonly<{ children: React.ReactNode }>) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const inViewControl = useAnimation();

	useEffect(() => {
		if (isInView) inViewControl.start('visible');
		if (isInView) inViewControl.start('open');
	}, [isInView]);

	return (
		<div ref={ref}>
			<AnimatePresence>
				<motion.div
					variants={containerVars}
					initial='initial'
					animate='open'
					exit='initial'
				>
					<div className='overflow-hidden'>{children}</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
