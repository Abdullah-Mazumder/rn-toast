import { createSlice } from "@reduxjs/toolkit";
const flashMessageSlice = createSlice({
  name: "flashMessage",
  initialState: {
    isVisible: false,
    autoClose: false,
    message: {
      type: "",
      text: "",
    },
  },
  reducers: {
    showFlashMessage: (state, action) => {
      console.log(action.payload);
      state.isVisible = true;
      state.autoClose = action.payload.autoClose;
      state.message = action.payload.message;
    },
    hideFlashMessage: (state, action) => {
      state.isVisible = false;
      state.autoClose = false;
      state.message = {
        type: "",
        text: "",
      };
    },
  },
});
export const { showFlashMessage, hideFlashMessage } = flashMessageSlice.actions;
export default flashMessageSlice.reducer;
