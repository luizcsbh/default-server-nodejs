var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var { body, validationResult } = require('express-validator'); // Nova forma de usar express-validator

var app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('./src/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para validação
app.use((req, res, next) => {
    req.validationResult = validationResult;
    req.body = body;
    next();
});

// Autoload de rotas, modelos e controladores
consign()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
    .into(app);

module.exports = app;
