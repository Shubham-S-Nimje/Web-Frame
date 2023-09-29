import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = false;

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebar: (state, action) => {
      // Set the state to the payload value (true or false)
      return action.payload;
    },
  },
});

export const { setSidebar } = sidebarSlice.actions;

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});

export default store;
