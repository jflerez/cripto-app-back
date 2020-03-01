const request = require('supertest-as-promised');
const container = require('../../../src/startup/container');
const server = container.resolve("app");


describe('Bravenewcoin', () => {
    
    describe('/GET Criptomonedas', () => {
      it('should get list prices criptomonedas', async () => {
       
        const res = await request(server.app()).get('/v1/api/moneda/lista?from=20&to=40');
        expect(res.status).toBe(200);
        expect(res.body.prices).toHaveLength(20);
      });
    });

    describe('/GET Conversion Criptomonedas', () => {
      it('should get value conversion criptomonedas', async () => {
       
        const res = await request(server.app()).get('/v1/api/moneda/conversion?qty=6&from=AVINOC&to=COP');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('success', true);
      });
    });

  });