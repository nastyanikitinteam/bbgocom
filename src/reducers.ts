// export {};

import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { reducer as LayoutReducer } from "./components/Layout/reducer";
import { reducer as CategoryFilterReducer } from "components/CategoryFilterPage/reducer";
import { ILayoutReducer } from "components/Layout/reducer";
import { IFilterReducer } from "components/CategoryFilterPage/reducer";

export interface IReducer {
  layout: ILayoutReducer;
  categoryFilter: IFilterReducer;
}

export const rootReducers = combineReducers<IReducer>({
  layout: LayoutReducer,
  categoryFilter: CategoryFilterReducer,
});

export type IRootState = ReturnType<typeof rootReducers>;
