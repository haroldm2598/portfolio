'use client';
import { useState } from 'react';
import { useAppSelector } from '@/lib/redux/store';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import styles from './ButtonMenu.module.scss';
import AnimateSection from '../Animated/AnimateSection';

export default function ButtonMenu() {
	const { navLinks } = useAppSelector((state) => state.dataTemplate);
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<div
				onClick={() => {
					setIsActive(!isActive);
				}}
				className={`${styles.button} flex items-center justify-center lg:hidden`}
			>
				<div
					className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
				></div>
			</div>
			<AnimatePresence>
				{isActive && (
					<motion.div
						className='fixed z-50 top-16 left-0 min-h-screen w-full md:w-[30rem] bg-darkBlue'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ delay: 0.3, type: 'tween', stiffness: 120 }}
					>
						<ul className='px-4 py-6 flex flex-col gap-10 text-white'>
							{navLinks?.map((item, index) => (
								<AnimateSection key={index}>
									<motion.li
										className={`text-2xl font-bold uppercase`}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.4, type: 'tween', stiffness: 90 }}
									>
										<Link
											href={`#${item.path}`}
											onClick={() => setIsActive(!isActive)}
										>
											{item.name}
										</Link>
									</motion.li>
								</AnimateSection>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
