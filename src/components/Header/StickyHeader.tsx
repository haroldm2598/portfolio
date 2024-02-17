import { useEffect, useState } from 'react';

interface StickyHeaderProps {
	children: React.ReactNode;
}

export default function StickyHeader({
	children
}: Readonly<StickyHeaderProps>) {
	const [sticky, setSticky] = useState('');
	const [isShown, setIsShown] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const isStickyClass =
		'w-full py-2 px-4 lg:px-8 fixed top-0 left-0 z-10 bg-black';

	const isSticky = () => {
		// if sticky class is has length then will go true but else non
		const stickyClass = window.scrollY >= 50 ? isStickyClass : '';
		window.scrollY > lastScrollY && window.scrollY > 150
			? setIsShown(true)
			: setIsShown(false);
		console.log(stickyClass.length);

		setSticky(stickyClass);
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', isSticky);

		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	}, [lastScrollY]);

	return (
		<header className={`${isStickyClass} ${isShown && 'hidden'}`}>
			{children}
		</header>
	);
}
