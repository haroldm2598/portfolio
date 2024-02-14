'use client';
import { libreBaskerville } from '@/lib/fonts';
import { useAppSelector } from '@/lib/redux/store';
import AnimateSection from './AnimateSection';

export default function About() {
	const { expertiseList } = useAppSelector((state) => state.dataTemplate);

	return (
		<section id='about' className='min-h-screen text-white'>
			<AnimateSection>
				<h1
					className={`${libreBaskerville.className} text-goldYellow text-[3.5rem] lg:text-[8rem] font-bold uppercase text-right opacity-50`}
				>
					about
				</h1>

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
								<AnimateSection key={index}>
									<li className='text-2xl uppercase'>{list.name}</li>
								</AnimateSection>
							);
						})}
					</ul>
				</div>
			</AnimateSection>
		</section>
	);
}
