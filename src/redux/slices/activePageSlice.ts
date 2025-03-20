import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ActivePage = "comics" | "characters";

interface ActivePageState {
  activePage: ActivePage;
}

const initialState: ActivePageState = {
  activePage: "comics",
};

const activePageSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<ActivePage>) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = activePageSlice.actions;
export default activePageSlice.reducer;
