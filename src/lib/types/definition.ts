import { StaticImageData } from 'next/image';

export interface InitialState {
	value: string | null;
	navLinks: Array<NavLinksProps>;
	expertiseList: Array<ExpertiseProps>;
	projectList: Array<ProjectProps>;
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
