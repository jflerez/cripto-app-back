const express = require("express");

let _express = null;
let _config = null;

// const app = express();
// app.use(router)

// app.listen(config.PORT, ()=> {
//                   console.log("Api corriendo en el puerto: ", config.PORT);
//               })

//               module.exports = app;

class Server{

    constructor({config, router}){

        _config = config;
        _express = express().use(router);

    }

    app(){
        return _express;
    }

    start(){
        return new Promise(resolve =>{
            _express.listen(_config.PORT, ()=> {
                console.log("Api corriendo en el puerto: ", _config.PORT);
                resolve();
            })
        })
    }

}

module.exports = Server;