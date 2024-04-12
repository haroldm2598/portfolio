'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TbSourceCode } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { ProjectProps } from '@/lib/types/definition';
import AnimeStaggered from '../ui/Animated/AnimeStaggered';
import AnimateSection from '../ui/Animated/AnimateSection';

interface ThreeDCardProps {
	data: Array<ProjectProps>;
}

export default function ThreeDCard({ data }: ThreeDCardProps) {
	return (
		<AnimateSection>
			<section className=' max-w-7xl grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
				{data.map((item, index) => {
					return (
						<AnimeStaggered key={index} custom={2 + index}>
							<CardContainer className='inter-var shadow-xl'>
								<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full lg:w-[26rem] xl:w-[30rem] h-auto rounded-xl p-6 border  '>
									<CardItem translateZ='70' className='w-full mt-4'>
										<Image
											src={item.imageSrc}
											// default h&w = 1500
											height='0'
											width='0'
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
											<Link href={item.githubLink}>source code</Link>
											<TbSourceCode size={16} />
										</CardItem>
										<CardItem
											translateZ='30'
											as='button'
											className='flex items-center gap-2 px-4 py-2 rounded-xl bg-goldYellow dark:bg-white dark:text-black text-white text-sm font-bold [&>*:nth-child(odd)]:duration-200 [&>*:nth-child(odd)]:hover:translate-x-1'
										>
											<Link href={item.livePreviewLink}>live preview</Link>
											<span>
												<CgWebsite size={16} />
											</span>
										</CardItem>
									</div>
								</CardBody>
							</CardContainer>
						</AnimeStaggered>
					);
				})}
			</section>
		</AnimateSection>
	);
}
