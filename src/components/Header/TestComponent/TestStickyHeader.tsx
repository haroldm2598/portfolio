'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TestStickyHeader({
	children
}: Readonly<{ children: React.ReactNode }>) {
	// problem lang nito yun scrollY get previous nag error dahil sa typescript
	// const { scrollY } = useScroll();
	// const [isHidden, SetIsHidden] = useState(false);

	// useMotionValueEvent(scrollY, 'change', (latest) => {
	// 	// find to fix this bug

	// 	const previous = scrollY?.getPrevious();
	// 	if (latest > previous && latest > 150) {
	// 		SetIsHidden(true);
	// 	} else {
	// 		SetIsHidden(false);
	// 	}
	// });

	const [isHidden, SetIsHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (window.scrollY > lastScrollY) {
			// if scroll down hide the navbar
			SetIsHidden(true);
		} else {
			// if scroll up show the navbar
			SetIsHidden(false);
		}

		// remember current page location to use in the next move
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);

		// cleanup function
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

// const [show, setShow] = useState(true);
// const [lastScrollY, setLastScrollY] = useState(0);

// const controlScroll = () => {
// 	window.scrollY > lastScrollY ? setShow(false) : setShow(true);
// 	setLastScrollY(window.scrollY);
// };

// useEffect(() => {
// 	window.addEventListener('scroll', controlScroll);

// 	return () => {
// 		window.removeEventListener('scroll', controlScroll);
// 	};
// }, [lastScrollY]);

// return (
// 	<header className={`${show && 'hidden'} fixed top-0 left-0 z-10`}>
// 		{children}
// 	</header>
// );
