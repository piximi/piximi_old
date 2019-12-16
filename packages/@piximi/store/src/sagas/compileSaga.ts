import {compile} from "@piximi/models";
import {put, takeEvery} from "redux-saga/effects";

import {compiledAction} from "../actions";

export function* compileSaga(action: any) {
  const {opened, options} = action.payload;

  const compiled = yield compile(opened, options);

  yield put(compiledAction({compiled: compiled}));
}

export function* watchCompileActionSaga() {
  yield takeEvery("CLASSIFIER_COMPILE", compileSaga);
}
