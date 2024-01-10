import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
     name: "search",
     initialState : {},
     reducers: {
          chacheResults: (state, action) => {
              return state = {...state , ...action.payload}
          }
     }
});

export const { chacheResults } = search.actions;

export default search.reducer;