import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '@/lib/types/definition';

const initialState: InitialState = {
	value: '',
	navLinks: [
		{ name: 'about', path: '#about' },
		{ name: 'projects', path: '#projects' },
		{ name: 'contact', path: '#contact' }
	]
};

export const data = createSlice({
	name: 'portfolio',
	initialState,
	reducers: {
		test: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		}
	}
});

export const { test } = data.actions;
export default data.reducer;
