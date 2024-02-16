import { useEffect, useState } from 'react';

interface StickyHeaderProps {
	children: React.ReactNode;
}

export default function StickyHeader({
	children
}: Readonly<StickyHeaderProps>) {
	const [sticky, setSticky] = useState('');

	useEffect(() => {
		window.addEventListener('scroll', isSticky);

		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	}, []);

	const isSticky = () => {
		const scrollTop = window.scrollY;
		const stickyClass = scrollTop >= 50 ? 'is-sticky' : '';
		setSticky(stickyClass);
	};

	return <div className={`w-full p-4 lg:px-8 ${sticky}`}>{children}</div>;
}
