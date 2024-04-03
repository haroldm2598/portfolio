import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimateMenuEffect({
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
		<motion.div
			variants={{
				visible: { y: 0, opacity: 1 },
				hidden: { y: '-200%', opacity: 0 }
			}}
			animate={isHidden ? 'hidden' : 'visible'}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.15, ease: 'easeInOut' }}
			// original transition
			// transition={{ delay: 0.35, type: 'tween', stiffness: 120 }}
			className='mx-5 px-0 fixed z-10 top-[6rem] left-0 right-0 min-h-screen max-w-full md:w-[30rem] bg-whiteBlur backdrop-blur-xl rounded-lg'
		>
			{children}
		</motion.div>
	);
}
