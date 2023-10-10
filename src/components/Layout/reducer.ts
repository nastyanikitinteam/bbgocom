import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILayoutReducer {
  isHeaderHidden: boolean;
  isFooterHidden: boolean;
}

const initialState: ILayoutReducer = {
  isHeaderHidden: false,
  isFooterHidden: false,
};

const LayoutReducer = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setHeaderHidden: (state, action) => {
      state.isHeaderHidden = action.payload;
    },
    setFooterHidden: (state, action) => {
      state.isFooterHidden = action.payload;
    },
    // fetchPortfolioSuccess: (state, action) => {},
    // fetchPortfolioError: (state) => {},
  },
});

export const { setHeaderHidden, setFooterHidden } = LayoutReducer.actions;

export const { reducer, actions } = LayoutReducer;
