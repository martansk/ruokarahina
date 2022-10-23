import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
    name: 'player',
    initialState: { 0: {}, 1:{} },
    reducers: {
        addPlayer(state, action) {
            console.log(action.payload);
            state[action.payload[1]] = action.payload[0];
            return state;
        },
        // eslint-disable-next-line no-unused-vars
        removePlayer(state, action) {
            return { 0: {}, 1:{} };
        },
        // removes player by id
        removeOnePlayer(state, action) {
            state[action.payload] = {};
            return state;
        }
    }
});

export const { addPlayer, removePlayer, removeOnePlayer } = playerSlice.actions;

export default playerSlice.reducer;