import { createSlice } from "@reduxjs/toolkit";
const flashMessageSlice = createSlice({
  name: "flashMessage",
  initialState: {
    isVisible: true,
    autoClose: false,
    message: {
      type: "",
      text: "",
    },
  },
  reducers: {
    showFlashMessage: (state, action) => {
      state.isVisible = true;
      state.autoClose = action.payload;
      state.message = action.payload;
    },
    hideFlashMessage: (state, action) => {
      state.isVisible = false;
      state.autoClose = action.payload;
      state.message = {
        type: "",
        text: "",
      };
    },
  },
});
export const { showFlashMessage, hideFlashMessage } = flashMessageSlice.actions;
export default flashMessageSlice.reducer;
// export const selectFlashMessage = (state) => state.flashMessage;
