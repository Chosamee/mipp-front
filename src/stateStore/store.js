import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "stateStore/languageSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default store;
