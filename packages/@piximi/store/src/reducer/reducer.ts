import { combineReducers, Reducer } from 'redux';
import { classifierReducer } from './classifier';

export const combinedReducers: Reducer = combineReducers({
  classifier: classifierReducer
});
