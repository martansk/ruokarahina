import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        addFilter(state, action) {
            return action.payload;
        },
        removeFilter(state, action) {
            return'';
        }
    }
});

export const { addFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;