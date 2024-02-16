import ImageSrc from '@/assets/images/devs.jpg';
import AnimateImage from '../Animated/AnimateImage';
import AnimateSection from '../Animated/AnimateSection';
import TitleSection from '../TitleSection';

export default function Projects() {
	return (
		<section id='projects' className='my-10'>
			<AnimateSection>
				<TitleSection title='projects' />
			</AnimateSection>

			<div className='w-full flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20'>
				<AnimateImage imageSrc={ImageSrc} />

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
							<button className='btn btn-outline btn-warning uppercase rounded-full hover:bg-black'>
								github
							</button>
							<button className='btn btn-warning text-white uppercase rounded-full'>
								live preview
							</button>
						</div>
					</div>
				</AnimateSection>
			</div>

			<div className='w-full mt-10 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20'>
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
							<button className='btn btn-outline btn-warning uppercase rounded-full hover:bg-black'>
								github
							</button>
							<button className='btn btn-warning text-white uppercase rounded-full'>
								live preview
							</button>
						</div>
					</div>
				</AnimateSection>

				<AnimateImage imageSrc={ImageSrc} />
			</div>
		</section>
	);
}
