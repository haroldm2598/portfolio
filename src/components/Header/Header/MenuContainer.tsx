'use client';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import AnimateSection from '../../ui/Animated/AnimateSection';

// RTK LIB
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/lib/redux/store';
import { SetIsActive } from '@/lib/redux/dataSlice/dataSlice';
import TestMenuEffect from '../TestComponent/TestMenuEffect';

export default function MenuContainer() {
	const { navLinks, isActive } = useAppSelector((state) => state.dataTemplate);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<AnimatePresence>
			{isActive && (
				// rename this for animation
				<TestMenuEffect>
					<motion.div
					// className='mx-5 px-0 fixed z-10 top-[6rem] left-0 right-0 min-h-screen max-w-full md:w-[30rem] bg-whiteBlur backdrop-blur-xl rounded-lg'
					// initial={{ opacity: 0 }}
					// animate={{ opacity: 1 }}
					// exit={{ opacity: 0 }}
					// transition={{ delay: 0.3, type: 'tween', stiffness: 120 }}
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
											onClick={() => dispatch(SetIsActive(!isActive))}
										>
											{item.name}
										</Link>
									</motion.li>
								</AnimateSection>
							))}
						</ul>
					</motion.div>
				</TestMenuEffect>
			)}
		</AnimatePresence>
	);
}
