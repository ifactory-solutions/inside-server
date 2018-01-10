// require the Koa server
const server = require('../../index');
// require supertest
const request = require('supertest');
// close the server after each test
afterEach(() => {
  server.close();
});
describe('routes: login', () => {
  test('should respond as expected', async () => {
    // const response = await request(server).post('/login');
    // expect(response.status).toEqual(200);
    // expect(response.type).toEqual('application/json');
    // expect(response.body.token).not.toEqual(null);
    // expect(response.body.token).not.toEqual(undefined);
  });
});
