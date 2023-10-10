// export {};

import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { reducer as LayoutReducer } from "./components/Layout/reducer";
import { ILayoutReducer } from "components/Layout/reducer";

export interface IReducer {
  layout: ILayoutReducer;
}

export const rootReducers = combineReducers<IReducer>({
  layout: LayoutReducer,
});

export type IRootState = ReturnType<typeof rootReducers>;
