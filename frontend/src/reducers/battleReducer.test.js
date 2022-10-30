import battleReducer from './battleReducer';
import deepFreeze from 'deep-freeze';

describe('battleReducer', () => {
  test('returns new state with action battle/addBattle', () => {
    const state = [];
    const action = {
      type: 'battle/addBattle',
      payload: [
        {
          turn: {
            time: '6.4',
          },
          player1: {
            name: 'omena',
          },
          player2: {
            name: 'porkkana',
          },
        },
      ],
    };

    deepFreeze(state);
    const newState = battleReducer(state, action);

    expect(newState[0][0]).toHaveProperty('turn');
    expect(newState[0][0]).toHaveProperty('player1');
    expect(newState[0][0]).toHaveProperty('player2');
  });

  test('returns new state with action battle/removeBattle', () => {
    const state = [
      [
        {
          turn: {
            time: '6.4',
          },
          player1: {
            name: 'omena',
          },
          player2: {
            name: 'porkkana',
          },
        },
      ],
    ];
    const action = {
      type: 'battle/removeBattle',
    };

    deepFreeze(state);
    const newState = battleReducer(state, action);

    expect(newState).toHaveLength(0);
  });
});
