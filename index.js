const container = require('./src/startup/container');
const server = container.resolve("app");
const db = require('./src/config/db');


db
  .authenticate()
  .then(() => {
    console.log('Conexion establecida exitosamente.');
    server.start();
  })
  .catch(err => {
    console.error('No fue posible conectarse a la Base de Datos debido a:', err);
  });