const express = require('express');
const routes = require('./routes'); //Não precisa passar o index.js, pois é um padrão do JS que pega automático.

const app = express();
routes(app); //esse app, vai ser o app do index.js


module.exports = app;
