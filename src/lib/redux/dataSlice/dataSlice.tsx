import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '@/lib/types/definition';
import ImageSrc from '@/assets/images/devs.jpg';

const initialState: InitialState = {
	value: '',
	isActive: false,
	navLinks: [
		{ name: 'about', path: 'about' },
		{ name: 'projects', path: 'projects' },
		{ name: 'contact', path: 'contact' }
	],
	expertiseList: [
		{ name: 'html' },
		{ name: 'css' },
		{ name: 'javascript' },
		{ name: 'sass' },
		{ name: 'tailwindcss' },
		{ name: 'reactjs' },
		{ name: 'nextjs' },
		{ name: 'github' },
		{ name: 'git' },
		{ name: 'typescript' },
		{ name: 'node' },
		{ name: 'express' },
		{ name: 'mongo db' }
	],
	projectList: [
		{
			imageSrc: ImageSrc,
			title: 'Todolist',
			desc: 'Provide the essitial tasks todo things and record on the spot and friendly user',
			githubLink: '',
			livePreviewLink: ''
		},
		{
			imageSrc: ImageSrc,
			title: 'Resume Builder',
			desc: 'Where create instant resume through online using a react js',
			githubLink: '',
			livePreviewLink: ''
		},
		{
			imageSrc: ImageSrc,
			title: 'Ecommerce',
			desc: '',
			githubLink: '',
			livePreviewLink: ''
		},
		{
			imageSrc: ImageSrc,
			title: '',
			desc: '',
			githubLink: '',
			livePreviewLink: ''
		}
	]
};

export const data = createSlice({
	name: 'portfolio',
	initialState,
	reducers: {
		test: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
		SetIsActive: (state, action: PayloadAction<boolean>) => {
			state.isActive = action.payload;
		}
	}
});

export const { test, SetIsActive } = data.actions;
export default data.reducer;
