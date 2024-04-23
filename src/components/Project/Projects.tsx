'use client';
import { useAppSelector } from '@/lib/redux/store';

import AnimateSection from '../ui/Animated/AnimateSection';
import TitleSection from '../TitleSection';
import ThreeDCard from './ThreeDCard';

export default function Projects() {
	const { projectList } = useAppSelector((state) => state.dataTemplate);

	return (
		<section
			id='projects'
			className='my-20 mx-0 lg:mx-16  2xl:max-w-[85rem] 2xl:mx-auto'
		>
			<AnimateSection>
				<TitleSection title='projects' />
			</AnimateSection>

			<ThreeDCard data={projectList} />
		</section>
	);
}

/* {projectList.map((item, index) => {
				return (
					<div
						key={index}
						className='bg-gray-900 w-fit mx-auto mb-10 p-4 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 transition-all ease-in-out duration-500 lg:hover:translate-y-[-2rem] lg:hover:translate-x-[2rem] rounded-lg'
					>
						<AnimateImage imageSrc={item.imageSrc} />

						<AnimateSection>
							<div className='max-w-[40rem] text-white [&>*]:mb-4'>
								<h1 className='text-[2rem] leading-10 font-bold uppercase'>
									{item.title}
								</h1>
								<p className='text-lightGrey text-[2rem] leading-10 opacity-90'>
									{item.desc}
								</p>

								<div className='last:mb-0 mt-10 [&>*]:mr-4'>
									<button className='btn btn-outline btn-warning uppercase  hover:bg-black'>
										github
									</button>
									<button className='btn btn-warning text-white uppercase '>
										live preview
									</button>
								</div>
							</div>
						</AnimateSection>
					</div>
				);
			})} */
