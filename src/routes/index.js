const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const {NotFoundMiddleware, ErrorMiddleware} = require('../middlewares')
const swaggerUI = require('swagger-ui-express');
const {SWAGGER_PATH} = require('../config');
const swaggerDocument = require(SWAGGER_PATH);

module.exports = ({HomeRoutes, UsuarioRoutes, CriptomonedaRoutes, AuthRoutes, BraveNewCoinRoutes})=>{
const router = express.Router();
const apiRoutes = express.Router();

apiRoutes
.use(express.json())
.use(cors()).
use(helmet()).
use(compression());

apiRoutes.use("/home", HomeRoutes);
apiRoutes.use("/usuario", UsuarioRoutes);
apiRoutes.use("/criptomoneda", CriptomonedaRoutes);
apiRoutes.use("/auth", AuthRoutes);
apiRoutes.use("/moneda", BraveNewCoinRoutes);
router.use("/v1/api",apiRoutes);
router.use("/api/doc",swaggerUI.serve, swaggerUI.setup(swaggerDocument));
router.use(ErrorMiddleware);
router.use(NotFoundMiddleware);
return router;
}