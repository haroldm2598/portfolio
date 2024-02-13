import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import dataReducer from './dataSlice/dataSlice';

export const store = configureStore({
	reducer: { dataTemplate: dataReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
