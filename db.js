
var mongoose = require ('mongoose');
var dbuser = 'noju';
var dbpassword = '12345678';
var dblocation = 'ds039301.mongolab.com:39301/heroku_app35064051';
var uristring = 'mongodb://' + dbuser + ':' + dbpassword + '@' + dblocation;

mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + uristring);

	var Game = new mongoose.Schema({
		map : { type : String },
		ai : { type: String },
		timebudget : { type : Number},
		winner : { type : String },
		turns : { type : Number },
		heuristic : { type : Number },
		level : { type : Number },
		processors : { type : Number },
		start : { type : Date },
		end : { type : Date}
	});

	exports.Game = mongoose.model('Game', Game);

	console.log ('Successfully created collections');

  }
});


