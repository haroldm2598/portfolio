'use client';
import { libreBaskerville } from '@/lib/fonts';
import { useAppSelector } from '@/lib/redux/store';
import Link from 'next/link';

/* referrence for menu  */
/* https://www.youtube.com/watch?v=yoMf7BOujLA*/
/* https://djudesign.com/ */

export default function Navbar() {
	const { navLinks } = useAppSelector((state) => state.dataTemplate);

	return (
		<header className='mb-10 flex lg:flex-row justify-between items-center text-white'>
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
		</header>
	);
}
