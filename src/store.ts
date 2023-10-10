import { createStore, applyMiddleware, Store } from "redux";

import createSagaMiddleware, { Task } from "redux-saga";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import { rootReducers, IRootState } from "./reducers";
import rootSaga from "./sagas";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    return nextState;
  } else {
    return rootReducers(state, action);
  }
};

function makeStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, bindMiddleware([sagaMiddleware]));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

const wrapper = createWrapper<Store<IRootState>>(makeStore, {
  debug: false,
});

export default wrapper;
