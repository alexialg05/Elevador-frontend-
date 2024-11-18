import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  sensorListReducer,
  sensorDetailsReducer,
} from './reducers/sensorReducer';

const reducers = combineReducers({
  sensorList: sensorListReducer,
  sensorDetails: sensorDetailsReducer,
});

const initialState = {};

const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
