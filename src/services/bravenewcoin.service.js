const axios = require('axios');
const config = require('../config');

class BraveNewCoinService {

    async getListadoMonedas(){
        try {

            let params = {
                coin: "btc"
              }
              
              let headers = {
                'Content-Type': config.CONTENT_TYPE,
                'x-rapidapi-host': config.RAPIDAPI_HOST,
	            'x-rapidapi-key': config.RAPIDAPI_KEY
              }

          let response = await axios.get(`${ config.URL_BRAVENEWCOIN }${ config.PATH_PRICES }`, {params, headers});
          console.log('Response monedas:', response.data)
          return response.data;
        } catch (error) {
          console.error("error al listar monedas: ", error)
        }
      }


      async getConversionMoneda(params){
        try {

            //console.log(JSON.stringify(params,null,4))

              let headers = {
                'Content-Type': config.CONTENT_TYPE,
                'x-rapidapi-host': config.RAPIDAPI_HOST,
	            'x-rapidapi-key': config.RAPIDAPI_KEY
              }

          let response = await axios.get(`${ config.URL_BRAVENEWCOIN }${ config.PATH_CONVERT }`, {params, headers});
          console.log('Response conversion moneda:', response.data)
          return response.data;
        } catch (error) {
          console.error("error al listar monedas: ", error)
        }
      }

}

module.exports = BraveNewCoinService;