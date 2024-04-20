// ORIGINAL
// import About from '@/components/About/About';
// import Hero from '@/components/Hero/Hero';
// import Contact from '@/components/Contact/Contact';
import Projects from '@/components/Project/Projects';

// BETA TESTING
import HeroTest from '@/components/Hero/HeroTest';
import AboutTest from '@/components/About/AboutTest';
import ContactTest from '@/components/Contact/ContactTest';
import Wrapper from '@/components/Wrapper';

export default function page() {
	return (
		<div>
			{/* <Hero /> */}
			{/* <About /> */}
			{/* <Contact /> */}
			<Wrapper>
				<HeroTest />
			</Wrapper>

			<Wrapper className='bg-white'>
				<AboutTest />
			</Wrapper>

			<Wrapper>
				<Projects />
			</Wrapper>

			<Wrapper className='bg-white'>
				<ContactTest />
			</Wrapper>
		</div>
	);
}
