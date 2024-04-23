'use client';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { loraSoftSemibold, loraSoftMedium } from '@/lib/fonts';
import { useAppSelector } from '@/lib/redux/store';

import ButtonMenu from './Header/ButtonMenu';
import MenuContainer from './Header/MenuContainer';
import StickyHeader from './Header/StickyNavbar';
import ThemeSwitch from '../ThemeSwitch';

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
			<StickyHeader>
				<AnimatePresence>
					<motion.div
						className='relative flex lg:flex-row justify-between items-center text-white'
						variants={headerAnimateVariants}
						initial='initial'
						animate='open'
					>
						<h1
							className={`${loraSoftSemibold.className} text-veryDarkGray dark:text-white text-3xl lg:text-[2.5rem] font-bold`}
						>
							RoldDev
						</h1>

						<ul className='hidden lg:flex items-center gap-8'>
							{navLinks.map((item, index) => {
								return (
									<li
										className={`${loraSoftMedium.className} text-veryDarkGray dark:text-white dark:hover:text-black text-xl uppercase cursor-pointer transition-all duration-300 ease-in-out delay-100 hover:text-gray-400`}
										key={index}
									>
										<Link href={`#${item.path}`}>{item.name}</Link>
									</li>
								);
							})}

							<ThemeSwitch />
						</ul>

						<div className='flex items-center gap-2 lg:hidden'>
							<ThemeSwitch />
							<ButtonMenu />
						</div>
					</motion.div>
				</AnimatePresence>
			</StickyHeader>

			<MenuContainer />
		</>
	);
}
