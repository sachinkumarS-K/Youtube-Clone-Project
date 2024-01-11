import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import videoSlice from "./slices/videoSlice";
import searchSlice from "./slices/searchSlice";
import userSlice from "./slices/userSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    video: videoSlice,
    search: searchSlice,
    user : userSlice
  },
});

export default store;