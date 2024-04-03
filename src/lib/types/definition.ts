import { StaticImageData } from 'next/image';

export interface InitialState {
	value: string | null;
	isActive: boolean;
	navLinks: Array<NavLinksProps>;
	projectList: Array<ProjectProps>;
	expertiseList: Array<{ imgSrc: string }>;
}

interface NavLinksProps {
	name: string;
	path: string;
}

export interface ProjectProps {
	imageSrc: StaticImageData;
	title: string;
	desc: string;
	githubLink: string;
	livePreviewLink: string;
}
