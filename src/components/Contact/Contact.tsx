import AnimateSection from '../ui/Animated/AnimateSection';
import TitleSection from '../TitleSection';
import FormMailer from './FormMailer';

export default function Contact() {
	return (
		<section id='contact' className='my-20 mx-0 lg:mx-16 lg:h-full'>
			<AnimateSection>
				<TitleSection title='get in touch' />
			</AnimateSection>

			<AnimateSection>
				<FormMailer />
			</AnimateSection>
		</section>
	);
}
