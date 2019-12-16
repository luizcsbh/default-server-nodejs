/* Imports server settings  */
var app = require('./config/server');

/* Parameterize the listening port */
app.listen(80, function(){
	console.log('Servidor online');
})