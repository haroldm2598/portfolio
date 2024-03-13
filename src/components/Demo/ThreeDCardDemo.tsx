'use client';
import Image from 'next/image';
import { TbSourceCode } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';

import { useAppSelector } from '@/lib/redux/store';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

export function ThreeDCardDemo() {
	const { projectList } = useAppSelector((state) => state.dataTemplate);

	return (
		<section className='lg:mx-16 max-w-7xl grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
			{projectList.map((item, index) => {
				return (
					<CardContainer key={index} className='inter-var shadow-xl'>
						<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
							<CardItem translateZ='70' className='w-full mt-4'>
								<Image
									src={item.imageSrc}
									height='1500'
									width='1500'
									className='h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl'
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
									translateZ='30'
									as='button'
									className='flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-goldYellow dark:bg-white dark:text-black text-black text-sm font-bold  [&>*:nth-child(odd)]:duration-200 [&>*:nth-child(odd)]:hover:translate-x-1'
								>
									source code
									<TbSourceCode size={16} />
								</CardItem>
								<CardItem
									translateZ='30'
									as='button'
									className='flex items-center gap-2 px-4 py-2 rounded-xl bg-goldYellow dark:bg-white dark:text-black text-white text-sm font-bold [&>*:nth-child(odd)]:duration-200 [&>*:nth-child(odd)]:hover:translate-x-1'
								>
									live preview
									<span>
										<CgWebsite size={16} />
									</span>
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				);
			})}
		</section>
	);
}
