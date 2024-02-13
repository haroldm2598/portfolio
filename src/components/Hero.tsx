import Image from 'next/image';
import ImageSrc from '@/assets/images/devs.jpg';

export default function Hero() {
	return (
		<section className='lg:min-h-screen flex flex-col lg:flex-row justify-around items-center text-white gap-10 lg:gap-0'>
			<h1 className='order-2 lg:order-1 w-full lg:w-[30rem] text-[2.5rem] leading-10 lg:text-[4rem] lg:leading-[4.875rem] font-bold'>
				a front-end developer bringing your ideas into life.
			</h1>

			<div className='order-1 lg:order-2 max-w-[500px] max-h-[500px] mx-auto lg:mx-0 rounded-lg overflow-hidden'>
				<Image
					alt='hero image'
					src={ImageSrc}
					className='w-full h-full object-cover'
				/>
			</div>
		</section>
	);
}
