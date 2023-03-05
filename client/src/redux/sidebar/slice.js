import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentSideBar: null
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changeBarType: (state, action) => {
      state.currentSideBar = action.payload;
    },
  },
});

export const { changeBarType } = sidebarSlice.actions;

export default sidebarSlice.reducer;
