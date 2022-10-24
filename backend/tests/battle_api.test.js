const supertest = require('supertest');
const app = require('../app.js');

const api = supertest(app);
const endpoint = '/api/battle/initialize';

describe('Battle API endpoints', () => {
  it('battle object initialized correctly', async () => {
    const body = {
      player1: {
        name: 'Porkkana1',
        energyKcal: 33,
        carbohydrate: 5.6,
        protein: 0.6,
        fat: 0.2
      },
      player2: {
        name: 'Porkkana2',
        energyKcal: 33,
        carbohydrate: 6.0,
        protein: 0.6,
        fat: 0.2
      }
    };
    const response = await api.post(endpoint).send(body);
    expect(response.status).toEqual(200);
    expect(response.body[0]).toEqual(
      expect.objectContaining({
        player1: expect.objectContaining({
          delay: 6.4,
          time_to_next_move: 6.4
        })
      })
    );
    expect(response.body[0]).toEqual(
      expect.objectContaining({
        player2: expect.objectContaining({
          delay: 6.8,
          time_to_next_move: 0.39999999999999947
        })
      })
    );
    expect(response.body[0]).toEqual(
      expect.objectContaining({
        turn: expect.objectContaining({
          time: 6.4,
          attacker: 'Porkkana1'
        })
      })
    );
  });
    
  it('non-valid payload, player1 missing', async() => {
    const body = {
      player1: {
        name: 'Porkkana1',
        energyKcal: 33,
        carbohydrate: 5.6,
        protein: 0.6,
        fat: 0.2
      }
    };
    const response = await api.post(endpoint).send(body);
    expect(response.status).toEqual(400);
  });

  it('both players have no attack power (=carbohydrate), return empty array', async() => {
    const body = {
      player1: {
        name: 'Porkkana1',
        energyKcal: 33,
        carbohydrate: 0.0,
        protein: 0.6,
        fat: 0.2
      },
      player2: {
        name: 'Porkkana2',
        energyKcal: 33,
        carbohydrate: 0.0,
        protein: 0.6,
        fat: 0.2
      }
    };
    const response = await api.post(endpoint).send(body);
    expect(response.status).toEqual(200);
    expect(response.body).toHaveLength(0);
  });

  it('player is missing stats', async() => {
    const body = {
      player1: {
        name: 'Porkkana1',
        energyKcal: 33,
        protein: 0.6,
        fat: 0.2
      },
      player2: {
        name: 'Porkkana2',
        energyKcal: 33,
        carbohydrate: 0.0,
        protein: 0.6,
        fat: 0.2
      }
    };
    const response = await api.post(endpoint).send(body);
    expect(response.status).toEqual(400);
  });
});