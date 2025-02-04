import {combineReducers} from 'redux';

import {homeSlice} from '@features/home/Slice';

import {layoutSlice} from '@features/layout';

const createRootReducer = () =>
  combineReducers({
    layout: layoutSlice.reducer,
    homes: homeSlice.reducer,
  });

export default createRootReducer;
