import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '@/lib/types/definition';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

const initialState: InitialState = {
	isActive: false,
	navLinks: [
		{ name: 'about', path: 'about' },
		{ name: 'projects', path: 'projects' },
		{ name: 'contact', path: 'contact' }
	],
	projectList: [
		{
			imageSrc: require('@/assets/images/projects/todolist.png').default,
			title: 'Todolist',
			desc: 'Provide the essitial tasks todo things and record on the spot and friendly user',
			githubLink: 'https://github.com/haroldm2598/Project-todolist',
			livePreviewLink: 'https://haroldm2598.github.io/Project-todolist/'
		},
		{
			imageSrc: require('@/assets/images/projects/resume-original.png').default,
			title: 'Resume Builder',
			desc: 'Where create instant resume through online using a react js',
			githubLink: 'https://github.com/haroldm2598/Project-resume',
			livePreviewLink: 'https://haroldm2598.github.io/Project-resume/'
		},
		{
			imageSrc: require('@/assets/images/projects/ecommerce.png').default,
			title: 'Ecommerce',
			desc: 'A reliable and friendly user ecommerce website. Where use an easy use of it!!',
			githubLink: 'https://github.com/haroldm2598/Project-ecommerce',
			livePreviewLink: 'https://haroldm2598.github.io/Project-ecommerce/'
		}
	],
	expertiseList: [
		{ imgSrc: require('@/assets/images/experties/html.svg').default },
		{ imgSrc: require('@/assets/images/experties/css.svg').default },
		{ imgSrc: require('@/assets/images/experties/javascript.svg').default },
		{ imgSrc: require('@/assets/images/experties/sass.svg').default },
		{ imgSrc: require('@/assets/images/experties/tailwindcss.svg').default },
		{ imgSrc: require('@/assets/images/experties/reactjs.svg').default },
		{ imgSrc: require('@/assets/images/experties/nextjs.svg').default },
		{ imgSrc: require('@/assets/images/experties/github.svg').default },
		{ imgSrc: require('@/assets/images/experties/git.svg').default },
		{ imgSrc: require('@/assets/images/experties/typescript.svg').default },
		{ imgSrc: require('@/assets/images/experties/nodejs.svg').default },
		{ imgSrc: require('@/assets/images/experties/express.svg').default },
		{ imgSrc: require('@/assets/images/experties/mongodb.svg').default }
	],
	socialMediaList: [
		{ Icon: SiGithub, socmedName: 'Github', path: '@link' },
		{ Icon: SiLinkedin, socmedName: 'Linkedin', path: '@link' },
		{ Icon: SiTwitter, socmedName: 'Twitter', path: '@link' }
	]
};

export const data = createSlice({
	name: 'portfolio',
	initialState,
	reducers: {
		SetIsActive: (state, action: PayloadAction<boolean>) => {
			state.isActive = action.payload;
		}
	}
});

export const { SetIsActive } = data.actions;
export default data.reducer;
