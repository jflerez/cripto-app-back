const {createContainer, asClass, asValue, asFunction} = require('awilix');

//Config
const config = require("../config");
const app = require('.');


//Services
const {HomeService, UsuarioService,CriptomonedaService, AuthService, BraveNewCoinService} = require("../services");


//Controllers
const {HomeController, UsuarioController, CriptomonedaController, AuthController, BraveNewCoinController} = require("../controllers");


//Routes
const {HomeRoutes, UsuarioRoutes, CriptomonedaRoutes, AuthRoutes, BraveNewCoinRoutes} = require('../routes/index.routes')
const Routes = require('../routes');

//Models
const {Usuario,Criptomoneda} = require("../models");


//Repositories

const {UsuarioRepository,CriptomonedaRepository} = require('../repositories')


const container = createContainer();

container
.register({
    app: asClass(app).singleton(),
   router: asFunction(Routes).singleton(),
   config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton(),
    UsuarioService: asClass(UsuarioService).singleton(),
    CriptomonedaService: asClass(CriptomonedaService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    BraveNewCoinService: asClass(BraveNewCoinService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UsuarioController: asClass(UsuarioController.bind(UsuarioController)).singleton(),
    CriptomonedaController: asClass(CriptomonedaController.bind(CriptomonedaController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    BraveNewCoinController: asClass(BraveNewCoinController.bind(BraveNewCoinController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
    CriptomonedaRoutes: asFunction(CriptomonedaRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    BraveNewCoinRoutes: asFunction(BraveNewCoinRoutes).singleton()
}).register({
    Usuario: asValue(Usuario),
    Criptomoneda: asValue(Criptomoneda)
}).register({
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    CriptomonedaRepository: asClass(CriptomonedaRepository).singleton()
});

module.exports = container;