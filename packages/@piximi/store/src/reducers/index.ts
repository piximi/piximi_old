import { combineReducers } from 'redux';

import {
  classifierReducer
} from './classifier';

export const reducer = combineReducers({
  classifier: classifierReducer,
});
