'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { libreBaskerville } from '@/lib/fonts';
import { useAppSelector } from '@/lib/redux/store';
import ButtonMenu from './ButtonMenu';

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

	return (
		<motion.header
			className='mb-10 w-full fixed top-0 left-0 z flex lg:flex-row justify-between items-center text-white'
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
	);
}
