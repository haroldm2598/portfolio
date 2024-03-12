'use client';
import { useAppSelector } from '@/lib/redux/store';

import AnimateImage from '../Animated/AnimateImage';
import AnimateSection from '../Animated/AnimateSection';
import TitleSection from '../TitleSection';

export default function Projects() {
	const { projectList } = useAppSelector((state) => state.dataTemplate);

	return (
		<section id='projects' className='my-20'>
			<AnimateSection>
				<TitleSection title='projects' />
			</AnimateSection>

			{projectList.map((item, index) => {
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
			})}
		</section>
	);
}

/* <div className='w-full mt-10 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20'>
				<AnimateSection>
					<div className='max-w-[40rem] text-white [&>*]:mb-4'>
						<h1 className='text-[2rem] leading-10 font-bold uppercase'>
							Title
						</h1>
						<p className='text-[2rem] leading-10'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
							voluptatibus rerum qui quasi odio aliquid deserunt tempora?
							Mollitia doloribus ducimus velit voluptates praesentium commodi
							reprehenderit quae id eum beatae. Doloribus?
						</p>

						<div className='last:mb-0 [&>*]:mr-4'>
							<button className='btn btn-outline btn-warning uppercase hover:bg-black'>
								github
							</button>
							<button className='btn btn-warning text-white uppercase'>
								live preview
							</button>
						</div>
					</div>
				</AnimateSection>

				<AnimateImage imageSrc={ImageSrc} />
			</div> */
