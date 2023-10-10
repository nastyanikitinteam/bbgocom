import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISearchBarReducer {
  isCategoryFilterOpen: boolean;
}

const initialState: ISearchBarReducer = {
  isCategoryFilterOpen: false,
};

const SearchBarReducer = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIsCategoryFilterOpen: (state, action) => {
      state.isCategoryFilterOpen = action.payload;
    },

    // fetchPortfolioSuccess: (state, action) => {},
    // fetchPortfolioError: (state) => {},
  },
});

export const { setIsCategoryFilterOpen } = SearchBarReducer.actions;

export const { reducer, actions } = SearchBarReducer;
