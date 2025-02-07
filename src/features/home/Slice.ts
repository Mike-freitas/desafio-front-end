import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AppDispatch, reduxNotifyError, RootState} from '@config/Redux';

import {HomeService} from './Service';

import { Home, HomeState } from '../../types/home';

// #region INITIAL STATE
const initialState: HomeState = {
  status: 'idle',
  entries: [],
  entry: null,
};
// #endregion

//#region REDUCER
export const homeSlice = createSlice({
  name: 'homes',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<'idle' | 'loading' | 'error'>) => {
      state.status = action.payload;
    },
    loadEntries: (state, action: PayloadAction<Home[]>) => {
      state.entries = action.payload;
    },
    loadEntry: (state, action: PayloadAction<Home>) => {
      state.entry = action.payload;
    },
    hasError: (state, action: PayloadAction<Error>) => {
      state.status = 'error';
    },
    reset: state => {
      state.status = 'idle';
      state.entries = [];
      state.entry = null;
    },
  },
});
//#endregion

//#region ACTIONS
export const {changeStatus, loadEntries, loadEntry, hasError, reset} =
  homeSlice.actions;

export const fetchAll = () => async (dispatch: AppDispatch) => {
  dispatch(changeStatus('loading'));

  try {
    const {data} = await HomeService.all();
    dispatch(loadEntries(data));
    dispatch(changeStatus('idle'));
  } catch (ex) {
    dispatch(hasError(ex as Error));
    dispatch(reduxNotifyError(ex));
  }
};
// #endregion

//#region SELECTORS
const reducer = (state: RootState) => state.homes;
export const statusSelector = (state: RootState) => reducer(state).status;
export const isLoadingSelector = (state: RootState) =>
  statusSelector(state) === 'loading';
export const entriesSelector = (state: RootState) => reducer(state).entries;
export const entrySelector = (state: RootState) => reducer(state).entry;
//#endregion

export default homeSlice.reducer;
