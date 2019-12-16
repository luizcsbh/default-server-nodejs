/* Import express framework module */
var express = require('express');

/*Import consign module */
var consign = require('consign');

/* Import body-parser module */
var bodyParser = require('body-parser');

/*  Import express-validator module */
var expressValidator = require('express-validator');

/* Start express object */
var app = express();

/* Set the 'view engine' and 'views' variables of express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configure middleware express.static */
app.use(express.static('./app/public'));

/* Configure body-parser middleware */
app.use(bodyParser.urlencoded({extended: true}));

/* Configure express-validator middleware */
app.use(expressValidator());

/* Autoloads routes, models, and controllers to the app object */
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* Export app object */
module.exports = app;