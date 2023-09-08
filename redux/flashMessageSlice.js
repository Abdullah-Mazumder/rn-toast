import { createSlice } from "@reduxjs/toolkit";
const flashMessageSlice = createSlice({
  name: "flashMessage",
  initialState: {
    isVisible: false,
  },
  reducers: {
    showFlashMessage: (state, action) => {
      state.isVisible = true;
    },
    hideFlashMessage: (state, action) => {
      state.isVisible = false;
    },
  },
});
export const { showFlashMessage, hideFlashMessage } = flashMessageSlice.actions;
export default flashMessageSlice.reducer;
