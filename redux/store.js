import { configureStore } from "@reduxjs/toolkit";
import flashMessageReducer from "./flashMessageSlice";

const store = configureStore({
  reducer: {
    flashMessage: flashMessageReducer,
  },
});

export default store;
