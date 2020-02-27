const request = require('supertest-as-promised');
const container = require('../../../src/startup/container');
const server = container.resolve("app");


describe('Usuarios', () => {
    
    describe('/POST signup', () => {
      it('should create new user', async () => {

        const body = {
            nombre: "bart",
            apellido: "Test",
            username: "bsimpsom",
            clave: "12345678",
            moneda: "USD"
        }
        const res = await request(server.app()).post('/v1/api/auth/signup').send(body);
        expect(res.status).toBe(201);
        //expect(res.body).toHaveProperty('success', true);
      });
    });
  
    // describe('/GET users', () => {
    //   it('should get all users', async () => {
    //     await testHelpers.generateUsers();
    //     const user = await testHelpers.getOneRandomUser();
    //     const res = await testHelpers.withLogin(
    //       request(server).get('/v1/users'),
    //       { name: user.name, password: user.password }
    //     );
    //     expect(res.status).toBe(200);
    //     expect(res.body.users.length).toEqual(2);
    //   });
    // });
  });