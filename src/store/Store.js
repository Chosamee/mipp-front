// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 데이터를 저장할 slice 생성
const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
  },
  reducers: {
    setData: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
