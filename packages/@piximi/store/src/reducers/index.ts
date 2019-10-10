import {AnyAction, combineReducers, Reducer} from 'redux';

import {
  classifierReducer
} from './classifier';
import {Classifier} from "@piximi/types";

export const reducer: Reducer<any, AnyAction> = combineReducers({
  classifier: classifierReducer,
});
