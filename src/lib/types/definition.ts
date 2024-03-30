import { StaticImageData } from 'next/image';

export interface InitialState {
	value: string | null;
	isActive: boolean;
	navLinks: Array<NavLinksProps>;
	expertiseList: Array<ExpertiseProps>;
	projectList: Array<ProjectProps>;
	testExpertiseList: Array<TestExpertiseProps>;
}

interface NavLinksProps {
	name: string;
	path: string;
}

interface ExpertiseProps {
	name: string;
}

interface ProjectProps {
	imageSrc: StaticImageData;
	title: string;
	desc: string;
	githubLink: string;
	livePreviewLink: string;
}

interface TestExpertiseProps {
	imgSrc: string;
}
