import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        addData(state, action) {
            return action.payload;
        },
        // eslint-disable-next-line no-unused-vars
        removeData(state, action) {
            return [];
        }
    }
});

export const { addData, removeData } = dataSlice.actions;

export default dataSlice.reducer;