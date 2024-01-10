import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     videoData: null,
     channelData: null,
  searchData: null,
     searchChannelData : null
}

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addVideos: (state, action) => {
      state.videoData = action.payload;
    },
    addChannelData: (state, action) => {
      state.channelData = action.payload;
    },
    addSearchVideo: (state, action) => {
      state.searchData = action.payload;
    },
    addSearchChannelData: (state, action) => {
      state.searchChannelData = action.payload;
    },
    setChannelDate: (state) => {
      state.searchChannelData = null
    }
  },
});

export const {
  addVideos,
  addChannelData,
  addSearchVideo,
  addSearchChannelData,
  setChannelDate,
} = videoSlice.actions;

export default videoSlice.reducer;