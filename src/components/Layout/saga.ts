import { takeLatest, put } from "redux-saga/effects";
import { actions } from "./reducer";

// import * as API from "services";
import { requestMiddleware } from "../../utils/api";

interface IMiddleware {
  req: any;
  params: Object;
  success: any;
  error: () => void;
  token?: string;
}

// function* headerHidden({ payload }: any) {
//   const req = true;
//   const { fetchPortfolioSuccess: success, fetchPortfolioError: error } =
//     actions;

//   const middleware: IMiddleware = {
//     req,
//     params: payload,
//     success,
//     error,
//   };

//   yield requestMiddleware(middleware);
// }

export default function* watchSaga() {
  // yield takeLatest(actions.setHeaderHidden.type, headerHidden);
}
