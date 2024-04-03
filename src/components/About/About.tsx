'use client';
import Image from 'next/image';
import { useAppSelector } from '@/lib/redux/store';
import AnimateSection from '../ui/Animated/AnimateSection';
import AnimeStaggered from '../ui/Animated/AnimeStaggered';
import TitleSection from '../TitleSection';

export default function About() {
	const { expertiseList } = useAppSelector((state) => state.dataTemplate);

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
				<h1 className='mt-10 text-[2rem] leading-10'>Here are my stacks</h1>

				<div className='my-20 grid grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
					{expertiseList.map((item, index) => (
						<AnimeStaggered key={index} custom={index}>
							<div className='w-32 h-32 lg:w-40 lg:h-40'>
								<Image
									src={item.imgSrc}
									className='h-full w-full object-contain'
									alt='thumbnail'
								/>
							</div>
						</AnimeStaggered>
					))}
				</div>
			</AnimateSection>
		</section>
	);
}
