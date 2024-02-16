'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { libreBaskerville } from '@/lib/fonts';
import { useAppSelector } from '@/lib/redux/store';
import ButtonMenu from './ButtonMenu';
import StickyHeader from './StickyHeader';

import Headroom from 'react-headroom';

/* referrence for menu  */
/* https://www.youtube.com/watch?v=yoMf7BOujLA*/
/* https://djudesign.com/ */

const headerAnimateVariants = {
	initial: { opacity: 0, y: -100 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { ease: 'easeInOut', duration: 0.5, delay: 0.2 }
	}
};

export default function Navbar() {
	const { navLinks } = useAppSelector((state) => state.dataTemplate);

	// for header class
	// mb-10 px-10 py-5 w-full fixed top-0 left-0 z-10
	return (
		<Headroom
			style={{
				webkitTransition: 'all .5s ease-in-out',
				mozTransition: 'all .5s ease-in-out',
				oTransition: 'all .5s ease-in-out',
				transition: 'all .5s ease-in-out'
			}}
		>
			{/* <StickyHeader> */}
			{/* dine ka mag lagay ng style pero dapat may exception */}
			<motion.header
				className='flex lg:flex-row justify-between items-center text-white'
				variants={headerAnimateVariants}
				initial='initial'
				animate='animate'
			>
				<h1 className={`${libreBaskerville.className} text-[2.5rem] font-bold`}>
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
			</motion.header>
			{/* </StickyHeader> */}
		</Headroom>
	);
}
