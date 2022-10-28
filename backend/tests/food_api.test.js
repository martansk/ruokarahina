const supertest = require('supertest')
const app = require('../app.js')

const api = supertest(app);
const endpoint = '/api/food/';

describe('Food API endpoints', () => {
    
    it('search results are returned as json', async () => {
        const response = await api.get(endpoint + 'omena');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual((expect.stringContaining('json')));
    });

    it('malformatted input', async () => {
        const response = await api.get(endpoint + "!?123");
        expect(response.status).toEqual(400);
    });

    it('searching with id should return only 1 food', async () => {
        const response = await api.get(endpoint + '4002');
        expect(response.status).toEqual(200);
        expect(response.body).toHaveLength(1);
    });

    // here are many opinions.. but I prefer returning 200 if the request was valid
    it('searching with valid input but no results', async () => {
        const response = await api.get(endpoint + 'kissanruoka');
        expect(response.status).toEqual(200);
        expect(response.body).toHaveLength(0);
    });

    // searching with empty query return 404 (getAll for /api/food/ not defined)
    it('searching with empty input', async () => {
        const response = await api.get(endpoint);
        expect(response.status).toEqual(404);
    })
});
