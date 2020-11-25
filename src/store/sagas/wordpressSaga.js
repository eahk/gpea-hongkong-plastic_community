import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as Actions from "../actions/action-types/wordpress-actions";

const WORDPRESS_URL = "https://vijnana.ideastime.ltd"; // process.env.REACT_APP_WORDPRESS_URL

export function* fetchWordpressContent() {
  try {
    const response = yield call(() =>
      axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts`)
    );

    if (response.statusText === "OK") {
      yield put({
        type: Actions.FETCH_WORDPRESS_CONTENT_SUCCESS,
        data: response.data
      });
    } else {
      yield put({ type: Actions.FETCH_WORDPRESS_CONTENT_FAIL });
    }
    // yield put({ type: Actions.FETCH_HOME_PAGE_SUCCESS, data });
  } catch (e) {
    yield put({ type: Actions.FETCH_WORDPRESS_CONTENT_FAIL });
  }
}
