import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ComicsInfo {
  title: string;
  description: string;
  image: string;
}

interface ComicsState {
  comicsId: number;
  comicsInfo: ComicsInfo | null; 
}

const initialState: ComicsState = {
  comicsId: 0,
  comicsInfo: null,
};

const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    setComicsId: (state, action: PayloadAction<number>) => {
      state.comicsId = action.payload;
    },
    setComicsInfo: (state, action: PayloadAction<ComicsInfo | null>) => {
      state.comicsInfo = action.payload;
    },
  },
})

export const { setComicsId, setComicsInfo } = comicsSlice.actions

export default comicsSlice.reducer;
