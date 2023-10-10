import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilterReducer {
  isCategoryFilterOpen: boolean;
}

const initialState: IFilterReducer = {
  isCategoryFilterOpen: false,
};

const CategoryFilterReducer = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    setIsCategoryFilterOpen: (state, action) => {
      state.isCategoryFilterOpen = action.payload;
    },

    // fetchPortfolioSuccess: (state, action) => {},
    // fetchPortfolioError: (state) => {},
  },
});

export const { setIsCategoryFilterOpen } = CategoryFilterReducer.actions;

export const { reducer, actions } = CategoryFilterReducer;
