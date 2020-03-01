if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DIALECT: process.env.DIALECT,
    JWT_SECRET: process.env.JWT_SECRET,
    RAPIDAPI_HOST:process.env.RAPIDAPI_HOST,
    RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
    CONTENT_TYPE: process.env.CONTENT_TYPE,
    URL_BRAVENEWCOIN: process.env.URL_BRAVENEWCOIN,
    PATH_PRICES: process.env.PATH_PRICES,
    PATH_CONVERT: process.env.PATH_CONVERT,
    SWAGGER_PATH: `../config/${process.env.SWAGGER_DOC}.json`
};