'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function StickyNavbar({
	children
}: Readonly<{ children: React.ReactNode }>) {
	const [isHidden, SetIsHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (window.scrollY > lastScrollY) {
			SetIsHidden(true);
		} else {
			SetIsHidden(false);
		}

		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);

		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	return (
		<motion.header
			variants={{
				visible: { y: 0 },
				hidden: { y: '-200%' }
			}}
			animate={isHidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.35, ease: 'easeInOut' }}
			className='w-full py-2 px-4 lg:px-8 fixed top-5 left-0 z-10 bg-whiteBlur backdrop-blur'
		>
			{children}
		</motion.header>
	);
}
