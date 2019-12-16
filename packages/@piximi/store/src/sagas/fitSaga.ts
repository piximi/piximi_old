import {fit} from "@piximi/models";
import {put, takeEvery} from "redux-saga/effects";

import {fittedAction} from "../actions";

export function* fitSaga(action: any) {
  const {compiled, data, validationData, options} = action.payload;

  const {fitted, status} = yield fit(compiled, data, validationData, options);

  yield put(fittedAction({fitted: fitted, status: status}));
}

export function* watchFitActionSaga() {
  yield takeEvery("CLASSIFIER_FIT", fitSaga);
}
