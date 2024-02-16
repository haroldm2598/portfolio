import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Project/Projects';

export default function page() {
	return (
		<div>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}
