import { createSlice } from '@reduxjs/toolkit';

const battleSlice = createSlice({
  name: 'battle',
  initialState: [],
  reducers: {
    addBattle(state, action) {
      state.push(action.payload);
      return state;
    },
    // eslint-disable-next-line no-unused-vars
    removeBattle(state, action) {
      return [];
    },
  },
});

export const { addBattle, removeBattle } = battleSlice.actions;

export default battleSlice.reducer;
