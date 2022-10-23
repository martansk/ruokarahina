import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        addFilter(state, action) {
            return action.payload;
        },
        // eslint-disable-next-line no-unused-vars
        removeFilter(state, action) {
            return '';
        }
    }
});

export const { addFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;