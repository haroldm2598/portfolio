import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

import AnimateSection from '../ui/Animated/AnimateSection';

import TitleSection from '../TitleSection';
import SubTitle from '../SubTitle';
import FormMailer from './FormMailer';

export default function Contact() {
	return (
		<section id='contact' className='my-20 mx-0 lg:mx-16 lg:h-full'>
			<AnimateSection>
				<TitleSection title='Contact' />
			</AnimateSection>

			<div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-0'>
				<div className='flex-1 flex lg:flex-col gap-10'>
					<div className='flex items-center gap-2'>
						<SiGithub size={40} />
						<div>
							<h1 className='font-semibold'>Github</h1>
							<span>@link</span>
						</div>
					</div>

					<div className='flex items-center gap-2'>
						<SiLinkedin size={40} />
						<div>
							<h1 className='font-semibold'>Linkedin</h1>
							<span>@link</span>
						</div>
					</div>

					<div className='flex items-center gap-2'>
						<SiTwitter size={40} />
						<div>
							<h1 className='font-semibold'>Github</h1>
							<span>@link</span>
						</div>
					</div>
				</div>

				<div className='flex-1'>
					<AnimateSection>
						<SubTitle title='Get in touch' />
						<FormMailer />
					</AnimateSection>
				</div>
			</div>
		</section>
	);
}
