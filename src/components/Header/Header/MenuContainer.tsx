'use client';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import AnimateSection from '../../Animated/AnimateSection';

// RTK LIB
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/lib/redux/store';
import { SetIsActive } from '@/lib/redux/dataSlice/dataSlice';

import styles from './ButtonMenu.module.scss';

// Problem with this is parent has backdrop so the children will not able to apply the effect
// nag apply yun padding nila dahil sa parent
// kapag nag apply ng left-0 sa medium size napunta sa right pero kapag ala nasisira naman yun pang mobile naka center div
// nilipat ko na ng seperate container pero hindi nag apply yun animation effect sa header para menucontainer
// alternative try to implement removing body scrollbar

export default function MenuContainer() {
	const { navLinks, isActive } = useAppSelector((state) => state.dataTemplate);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<AnimatePresence>
			{isActive && (
				<motion.div
					className={`${styles.containerBlur} mx-5 px-0 fixed z-10 top-[6rem] left-0 right-0 min-h-screen max-w-full md:w-[30rem] rounded-lg`}
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
										onClick={() => dispatch(SetIsActive(!isActive))}
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
	);
}
