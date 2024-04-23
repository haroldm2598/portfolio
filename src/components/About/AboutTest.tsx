'use client';
import Image from 'next/image';
import { useAppSelector } from '@/lib/redux/store';
import AnimateSection from '../ui/Animated/AnimateSection';
import AnimeStaggered from '../ui/Animated/AnimeStaggered';
import TitleSection from '../TitleSection';

export default function AboutTest() {
	const { expertiseList } = useAppSelector((state) => state.dataTemplate);

	return (
		<section
			id='about'
			className='py-20 min-h-screen mx-0 lg:mx-16 text-veryDarkGray 2xl:max-w-[85rem] 2xl:mx-auto'
		>
			<AnimateSection>
				<TitleSection title='about' />

				<p className='max-w-[70rem] mt-5 text-2xl lg:text-[2rem] leading-[2.5rem] opacity-80 dark:text-white'>
					hey mike here. A dedicated front-end developer creating stunning,
					functional website. A user-friendly web experienced who loves to
					develope a website where analytical and problem solving provide
					solutions to your needs.
				</p>
			</AnimateSection>

			<AnimateSection>
				<h1 className='mt-10 text-[2rem] font-semibold leading-10 dark:text-white'>
					Here are my stacks
				</h1>

				<div className='my-10 flex flex-wrap justify-center md:justify-start gap-3 lg:gap-5'>
					{expertiseList.map((item, index) => (
						<AnimeStaggered key={index} custom={1 + index}>
							<div className='my-2 w-[100px] h-[100px] grid place-items-center bg-white border-2 border-[#E1E1E1] rounded-lg shadow-md'>
								<div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]'>
									<Image
										src={item.imgSrc}
										className='h-full w-full object-contain'
										alt='thumbnail'
									/>
								</div>
							</div>
						</AnimeStaggered>
					))}
				</div>
			</AnimateSection>
		</section>
	);
}
