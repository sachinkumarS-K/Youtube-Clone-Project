import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     isSideBarOpen : true ,
}

const appSlice = createSlice({
     name: "app",
     initialState,
     reducers: {
          toggleSideBar: (state) => {
               state.isSideBarOpen = !state.isSideBarOpen
          },
          closeSideBar: (state) => {
               state.isSideBarOpen = false 
          },
          opneSideBar: (state) => {
               state.isSideBarOpen = true 
          }
     }
});

export const { toggleSideBar, closeSideBar, opneSideBar } = appSlice.actions;
export default appSlice.reducer;