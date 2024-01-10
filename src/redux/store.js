import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import videoSlice from "./slices/videoSlice";
import searchSlice from "./slices/searchSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    video: videoSlice,
    search : searchSlice
  },
});

export default store;