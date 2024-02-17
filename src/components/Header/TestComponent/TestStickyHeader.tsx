'use client';
import { useState } from 'react';
import {
	MotionValue,
	motion,
	useMotionValueEvent,
	useScroll
} from 'framer-motion';

export default function TestStickyHeader({
	children
}: Readonly<{ children: React.ReactNode }>) {
	const { scrollY } = useScroll();
	const [isHidden, SetIsHidden] = useState(false);

	//scrollY as {
	// 	scrollY: MotionValue<number>;
	// };
	// interface PreviousProps {
	// 	previous: MotionValue<number>;
	// }

	// interface PreviousProps {
	// 	previous?: MotionValue<number | undefined>;
	// }

	useMotionValueEvent(scrollY, 'change', (latest) => {
		// find to fix this bug

		const previous = scrollY?.getPrevious();
		if (latest > previous && latest > 150) {
			SetIsHidden(true);
		} else {
			SetIsHidden(false);
		}
	});

	return (
		<motion.header
			variants={{
				visible: { y: 0 },
				hidden: { y: '-100%' }
			}}
			animate={isHidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.35, ease: 'easeInOut' }}
			className='w-full py-2 px-4 lg:px-8 fixed top-0 left-0 z-10 bg-black'
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
