import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     isSideBarOpen: true,
     isSearchOpen : false
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
          },
          setSearchOpen: (state , actions) => {
               state.isSearchOpen = actions.payload;
          }
     }
});

export const { toggleSideBar, closeSideBar, opneSideBar, setSearchOpen } =
  appSlice.actions;
export default appSlice.reducer;