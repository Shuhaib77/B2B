import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
