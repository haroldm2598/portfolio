export interface InitialState {
	value: string | null;
	navLinks: Array<NavLinksProps>;
}

interface NavLinksProps {
	name: string;
	path: string;
}
