module.exports = function(application){
	application.get('/', function(req, res){
		res.send('Welcome to your NodeJS app!');
	});
}