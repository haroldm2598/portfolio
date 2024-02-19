'use client';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { libreBaskerville } from '@/lib/fonts';
import { useAppSelector } from '@/lib/redux/store';
import ButtonMenu from './ButtonMenu';
import StickyHeader from './StickyHeader';
import TestStickyHeader from './TestComponent/TestStickyHeader';

/* referrence for menu  */
/* https://www.youtube.com/watch?v=yoMf7BOujLA*/
/* https://djudesign.com/ */

const headerAnimateVariants = {
	initial: { opacity: 0, y: '-100%' },
	open: {
		opacity: 1,
		y: 0,
		transition: { ease: 'easeInOut', duration: 0.5, delay: 0.2 }
	}
};

export default function Navbar() {
	const { navLinks } = useAppSelector((state) => state.dataTemplate);

	return (
		<>
			{/* teststicky is not the official name when polish everything before deployment */}
			<TestStickyHeader>
				{/* <StickyHeader> */}
				<AnimatePresence>
					<motion.div
						className='relative flex lg:flex-row justify-between items-center text-white'
						variants={headerAnimateVariants}
						initial='initial'
						animate='open'
					>
						<h1
							className={`${libreBaskerville.className} text-[2.5rem] font-bold`}
						>
							RoldDev
						</h1>

						<ul className='hidden lg:flex gap-10'>
							{navLinks.map((item, index) => {
								return (
									<li
										className={`${libreBaskerville.className} text-xl font-bold uppercase cursor-pointer transition-all duration-300 ease-in-out delay-100 hover:text-gray-400`}
										key={index}
									>
										<Link href={`#${item.path}`}>{item.name}</Link>
									</li>
								);
							})}
						</ul>

						<ButtonMenu />
					</motion.div>
				</AnimatePresence>
			</TestStickyHeader>
			{/* </StickyHeader> */}
			{/* </TestStickyHeader> */}
		</>
	);
}

// import Headroom from 'react-headroom';
/* <Headroom
			style={{
				webkitTransition: 'all .5s ease-in-out',
				mozTransition: 'all .5s ease-in-out',
				oTransition: 'all .5s ease-in-out',
				transition: 'all .5s ease-in-out'
			}}
		></Headroom> */
