import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  pagination: {
    _page: 1,
    _limit: 10,
    _totalRows: 0,
  },
};

// createAction

// func =. {
//   type: string, payload: {}
// }

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsAction: (state) => {
      state.isLoading = true;
    },
    getProductsAction1: (state) => {
      state.isLoading = true;
    },
  },
});

console.log(productsSlice);

export const { getProductsAction } = productsSlice.actions;

export default productsSlice.reducer;
