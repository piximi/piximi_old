import {AnyAction, combineReducers, Reducer} from "redux";

import {classifierReducer} from "./classifier";

export const reducer: Reducer<any, AnyAction> = combineReducers({
  classifier: classifierReducer
});
