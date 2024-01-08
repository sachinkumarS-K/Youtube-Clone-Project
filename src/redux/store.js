import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import videoSlice from "./slices/videoSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    video : videoSlice
  },
});

export default store;