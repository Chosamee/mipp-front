import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "stateStore/languageSlice";
import editingReducer from "./editingSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    editing: editingReducer,
  },
});

export default store;
