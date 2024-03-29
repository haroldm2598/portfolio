'use client';
import { useAppSelector } from '@/lib/redux/store';
import AnimateSection from '../Animated/AnimateSection';
import AnimeStaggered from '../Animated/AnimeStaggered';
import TitleSection from '../TitleSection';

export default function About() {
	const { expertiseList } = useAppSelector((state) => state.dataTemplate);
	// "react-icons/si" icons for expertiselist

	return (
		<section id='about' className='min-h-screen mx-0 lg:mx-16 text-white'>
			<AnimateSection>
				<TitleSection title='about' />

				<p className='max-w-[70rem] mt-5 text-[2rem] leading-[2.5rem]'>
					I am harold michael mag-isa a dedicated front-end developer creating
					stunning, functional website. A user-friendly web experienced who
					loves to develope a website where analytical and problem solving
					provide solutions to your needs
				</p>
			</AnimateSection>

			<AnimateSection>
				<div className='mt-10'>
					<h1 className='text-[2rem] leading-10'>Here are my stacks</h1>

					<ul className='mt-5 h-72 flex flex-col flex-wrap gap-2'>
						{expertiseList.map((list, index) => {
							return (
								<AnimeStaggered key={index} custom={index}>
									<li className='text-2xl uppercase'>{list.name}</li>
								</AnimeStaggered>
							);
						})}
					</ul>
				</div>
			</AnimateSection>
		</section>
	);
}
