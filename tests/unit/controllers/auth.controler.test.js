const request = require('supertest-as-promised');
const container = require('../../../src/startup/container');
const server = container.resolve("app");


describe('Usuarios', () => {
    
    describe('/POST signup', () => {
      it('should create new user', async () => {

        const body = {
            nombre: "Prueba",
            apellido: "Test",
            username: "tprueba",
            clave: "1234test",
            moneda: "USD"
        }
        const res = await request(server.app()).post('/v1/api/auth/signup').send(body);
        expect(res.status).toBe(201);
      });
    });

    describe('/POST signin', () => {
      it('should login user', async () => {

        const body = {
            username: "bsimpsom",
            clave: "12345678"
        }
        const res = await request(server.app()).post('/v1/api/auth/signin').send(body);
        expect(res.status).toBe(200);
      });
    });
  });