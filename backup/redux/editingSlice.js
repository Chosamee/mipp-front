// src/stateStore/editingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditing: false,
};

const editingSlice = createSlice({
  name: "editing",
  initialState,
  reducers: {
    setEditing: (state, action) => {
      state.isEditing = action.payload;
    },
  },
});

// export const { setEditing } = editingSlice.actions;
// export default editingSlice.reducer;
