import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState, store } from '@app/store';

export const useLocalDispatch = ():typeof store.dispatch => useDispatch<AppDispatch>();
export const useLocalSelector: TypedUseSelectorHook<RootState> = useSelector;
