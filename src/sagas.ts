import { all } from "redux-saga/effects";

import LayoutSaga from "./components/Layout/saga";

export default function* rootSaga() {
  yield all([LayoutSaga()]);
}
