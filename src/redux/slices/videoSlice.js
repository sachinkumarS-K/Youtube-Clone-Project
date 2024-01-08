import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     videoData: null,
     channelData : null
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
          }
     }
});

export const { addVideos, addChannelData } = videoSlice.actions;

export default videoSlice.reducer;