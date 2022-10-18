import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
    name: 'player',
    initialState: [],
    reducers: {
        addPlayer(state, action) {
            state.push(action.payload);
            return state;
        },
        removePlayer(state, action) {
            return [];
        }
    }
});

export const { addPlayer, removePlayer } = playerSlice.actions;

export default playerSlice.reducer;