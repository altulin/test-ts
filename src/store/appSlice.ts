import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, IFilialItem, IMenu } from "./initialState";

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

    setGoods(state, action: PayloadAction<IMenu[] | null>) {
      state.goods = action.payload;
    },
    setPages(state, action: PayloadAction<number | null>) {
      switch (action.payload) {
        case null || 1:
          state.pages = null;
          break;

        default:
          state.pages = action.payload;
      }
    },
  },
});

export const { setFilials, setCurrentFilial, setGoods, setPages } =
  appSlice.actions;
export default appSlice.reducer;
