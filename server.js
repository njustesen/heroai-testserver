
var http = require('http');
var express = require('express');
var db = require('./db.js');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public/', {maxAge: 0}));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
	console.log('Server listening to port ' + app.get('port'));
});

app.post('/ping', function(req, res) {
	console.log("ping called");
	res.send('Hello World');
});

app.post('/game/create/', function(req, res) {

	var map = req.body.map;	
    var ai = req.body.ai;	
    var level = req.body.level;
    var timebudget = req.body.timebudget;
	var processors = req.body.processors;	

    console.log("Map: " + map);
	console.log("AI: " + ai);
    console.log("Timebudget: " + timebudget);
    console.log("level: " + level);
    console.log("processors: " + processors);

	var game = new db.Game({
		map : map,
		ai : ai,
		timebudget : timebudget,
		level : level,
		winner : "",
		turns : 0,
		processors : processors,
		heuristic : 0,
		start : new Date()
	});

	game.save(function (err, game) {
		if (err){
			res.send({error: true, text : "Error saving the game!"});
			console.log("Error: " + err);
		}else{ 
			console.log("Game saved");
			res.send(game);
		}
	});

});

app.post('/game/update/', function(req, res) {

	var id = req.body.id;
	var turns = req.body.turns;
	var heuristic = req.body.heuristic;
	var winner = req.body.winner;
	
	console.log('id: ' + id);
	console.log('player: ' + turns);
	console.log('heuristic: ' + heuristic);
	console.log('winner: ' + winner);
	
	db.Game.findOne({_id : id}, function(err, game) {
		if (game && game.winner == ""){
			console.log("Game found.");
			game.turns = turns;
			game.heuristic = heuristic;
			game.winner = winner;
			if (winner != "")
				game.end = new Date();
			game.save();
			res.json(game);
		} else {
			res.status(400).send("Game not found");
		}
	});
});

app.post('/game/list/', function(req, res) {

	console.log("/game/list/ called");
	
	db.Game.find( 
		{ 
		}, function(err, games) {
		res.json(games);
	});

});

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/'); // Derect to angular
});