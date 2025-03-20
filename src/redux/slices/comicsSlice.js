import { createSlice } from "@reduxjs/toolkit";

const comicsSlice = createSlice({
    name: 'comics',
    initialState: {
        comicsId: '',
        comicsInfo: '',
    },
    reducers: {
        setComicsId: (state, action) => {
            state.comicsId = action.payload;
        },
        setComicsInfo: (state, action) => {
            state.comicsInfo = action.payload;
        },
    },
})

export const { setComicsId, setComicsInfo } = comicsSlice.actions

export default comicsSlice.reducer