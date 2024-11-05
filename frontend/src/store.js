import { combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  sensorListReducer,
  sensorDetailsReducer,
} from './reducers/sensorReducer';

const reducers = combineReducers({
  // Add your reducers here
  sensorList: sensorListReducer,
  sensorDetails: sensorDetailsReducer,
});
const initialState = {
  // Add your initial state here
};

const middleware = [thunk];

const store = configureStore(
  { reducer: reducers },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
