'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/redux/store';

interface reduxProvider {
	children: ReactNode;
}

export function ReduxProvider({ children }: reduxProvider) {
	return <Provider store={store}>{children}</Provider>;
}
