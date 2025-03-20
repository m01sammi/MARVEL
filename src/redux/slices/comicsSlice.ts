import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ComicsInfo {
  title: string;
  description: string;
  image: string;
  // Добавьте дополнительные поля, которые есть в объекте comicsInfo
}

interface ComicsState {
  comicsId: string;
  comicsInfo: ComicsInfo | null; 
}

const initialState: ComicsState = {
  comicsId: '',
  comicsInfo: null,
};

const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    setComicsId: (state, action: PayloadAction<string>) => {
      state.comicsId = action.payload;
    },
    setComicsInfo: (state, action: PayloadAction<ComicsInfo | null>) => {
      state.comicsInfo = action.payload;
    },
  },
})

export const { setComicsId, setComicsInfo } = comicsSlice.actions

export default comicsSlice.reducer;
