import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchItem: '',
    },
    reducers: {
        setSearchItem: (state, action) => {
            state.searchItem = action.payload;
        },
    },
})

export const { setSearchItem } = searchSlice.actions

export default searchSlice.reducer