'use client';
import { useAppSelector } from '@/lib/redux/store';

import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

export function ThreeDCardDemo() {
	const { projectList } = useAppSelector((state) => state.dataTemplate);

	return (
		<section className='lg:mx-16 max-w-7xl grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
			{projectList.map((item, index) => {
				return (
					<CardContainer key={index} className='inter-var'>
						<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
							<CardItem translateZ='70' className='w-full mt-4'>
								<Image
									src={item.imageSrc}
									height='1500'
									width='1500'
									className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
									alt='thumbnail'
								/>
							</CardItem>
							<CardItem
								translateZ='50'
								className='my-4 text-xl font-bold text-neutral-600 dark:text-white'
							>
								{item.title}
							</CardItem>
							<CardItem
								as='p'
								translateZ='60'
								className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
							>
								{item.desc}
							</CardItem>

							<div className='flex justify-between items-center mt-10'>
								<CardItem
									translateZ={20}
									as='button'
									className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
								>
									Sign up
								</CardItem>
								<CardItem
									translateZ={20}
									as='button'
									className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
								>
									Sign up
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				);
			})}
		</section>
	);
}
