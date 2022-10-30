import playerReducer from './playerReducer';
import deepFreeze from 'deep-freeze';

describe('playerReducer', () => {
    test('returns new state with action player/addPlayer', () => {
        const state = { 0: {}, 1:{} };
        const playerObject = {
            'name': 'porkkana',
            'energyKcal': 33
        };
        const action = {
            type: 'player/addPlayer',
            payload: [ playerObject, 0 ]
        };

        deepFreeze(state);
        const newState = playerReducer(state, action);

        expect(newState).toHaveProperty('0', playerObject);
        expect(newState).toHaveProperty('1', {});
    });

    test('returns new state with action player/removePlayer', () => {
        const state = {
            0: {'name': 'porkkana', ' energyKcal': '33'},
            1: {'name': 'omena', 'energyKcal': '50'}
        };
        const action = {
            type: 'player/removePlayer'
        };

        deepFreeze(state);
        const newState = playerReducer(state, action);

        expect(newState).toHaveProperty('0', {});
        expect(newState).toHaveProperty('1', {});
    });

    test('returns new state with action player/removeOnePlayer', () => {
        const state = {
            0: {'name': 'porkkana', 'energyKcal': '33'},
            1: {'name': 'omena', 'energyKcal': '50'}
        };
        const action = {
            type: 'player/removeOnePlayer',
            payload: 1
        };

        deepFreeze(state);
        const newState = playerReducer(state, action);

        expect(newState).toHaveProperty('0', {'name': 'porkkana', 'energyKcal': '33'});
        expect(newState).toHaveProperty('1', {});
    });
});