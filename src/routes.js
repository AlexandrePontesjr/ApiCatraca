const express = require ('express');

const routes = express.Router();

const catraca_controler = require('./controle/catraca_controler');

routes.get('/',(req, res) => {

   
    return catraca_controler.index(req,res);
})
module.exports = routes;