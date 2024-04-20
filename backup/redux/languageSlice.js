import { createSlice } from "@reduxjs/toolkit";

const userLanguage = navigator.language || "en";

const languageSlice = createSlice({
  name: "language",
  initialState: userLanguage,
  reducers: { setLanguage: (state, action) => action.payload },
});

// export const { setLanguage } = languageSlice.actions;
// export default languageSlice.reducer;
