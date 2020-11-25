import { all, takeLatest, takeEvery } from "redux-saga/effects";
import * as Actions from "../actions";
import { fetchWordpressContent } from "./wordpressSaga";

function* rootSaga() {
  yield all([
    takeLatest(Actions.FETCH_WORDPRESS_CONTENT_START, fetchWordpressContent)
  ]);
}

export default rootSaga;
