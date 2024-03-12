'use client';

import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import ImageSrc from '@/assets/images/devs.jpg';

export function ThreeDCardDemo() {
	return (
		<section className='flex flex-col lg:flex-row gap-10 justify-center'>
			<CardContainer className='inter-var flex-1'>
				<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
					<CardItem translateZ='70' className='w-full mt-4'>
						<Image
							src={ImageSrc}
							height='1500'
							width='1500'
							className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
							alt='thumbnail'
						/>
					</CardItem>
					<CardItem
						translateZ='50'
						className='text-xl font-bold text-neutral-600 dark:text-white'
					>
						Make things float in air
					</CardItem>
					<CardItem
						as='p'
						translateZ='60'
						className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
					>
						Hover over this card to unleash the power of CSS perspective
					</CardItem>
				</CardBody>
			</CardContainer>

			<CardContainer className='inter-var flex-1'>
				<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
					<CardItem
						translateZ='50'
						className='text-xl font-bold text-neutral-600 dark:text-white'
					>
						Make things float in air
					</CardItem>
					<CardItem
						as='p'
						translateZ='60'
						className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
					>
						Hover over this card to unleash the power of CSS perspective
					</CardItem>
					<CardItem translateZ='100' className='w-full mt-4'>
						<Image
							src={ImageSrc}
							height='1000'
							width='1000'
							className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
							alt='thumbnail'
						/>
					</CardItem>
				</CardBody>
			</CardContainer>
		</section>
	);
}
