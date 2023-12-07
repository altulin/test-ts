import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, IFilialItem } from "./initialState";

const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    setFilials(state, action: PayloadAction<{ id: number; name: string }[]>) {
      const listFilials = action.payload.map(({ id, name }) => {
        return {
          id,
          label: name,
        };
      });
      state.filials = listFilials;
      state.currentFilial = listFilials[0];
    },

    setCurrentFilial(state, action: PayloadAction<IFilialItem>) {
      state.currentFilial = action.payload;
    },
  },
});

export const { setFilials, setCurrentFilial } = appSlice.actions;
export default appSlice.reducer;
