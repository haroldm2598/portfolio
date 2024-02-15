'use client';
import { useState } from 'react';
import styles from './ButtonMenu.module.scss';

export default function ButtonMenu() {
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

			{isActive && (
				<div className='w-full h-full bg-white absolute top-[12%] right-0 z-10'>
					testing
				</div>
			)}
		</>
	);
}
