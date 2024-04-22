'use client';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/lib/redux/store';
import { SetIsActive } from '@/lib/redux/dataSlice/dataSlice';

import styles from './ButtonMenu.module.scss';

export default function ButtonMenu() {
	const { isActive } = useAppSelector((state) => state.dataTemplate);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<>
			<div
				onClick={() => {
					dispatch(SetIsActive(!isActive));
				}}
				className={`${styles.button} last:px-0 flex items-center justify-center`}
			>
				<div
					className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
				></div>
			</div>
		</>
	);
}
