import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalState, initialState } from "./initialState";

const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    stepTo(state, action: PayloadAction<IModalState>) {
      state.modalState = action.payload;
    },

    clearAllStep(state) {
      state.modalState = null;
    },

    // setPosts(state, action) {
    // state.posts = action.payload;
    // },
  },
});

export const { stepTo, clearAllStep } = appSlice.actions;
export default appSlice.reducer;
