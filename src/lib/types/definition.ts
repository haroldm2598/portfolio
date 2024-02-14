export interface InitialState {
	value: string | null;
	navLinks: Array<NavLinksProps>;
	expertiseList: Array<ExpertiseProps>;
}

interface NavLinksProps {
	name: string;
	path: string;
}

interface ExpertiseProps {
	name: string;
}
