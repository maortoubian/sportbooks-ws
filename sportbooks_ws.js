var SportBooks = require('./sportbooks');
var express = require('express');
var url = require('url');
var app =  express();

var sportBooks = new SportBooks;

//root file called, an explanation HTML for the sportbooks module
app.get('/', function(req,res) {
	res.sendFile(__dirname + '/HTML/index.html');
});

//route showAllSportBooks called, will activate the module - getAll - function that will return a JSON with all the books
app.get('/showAllSportBooks', function(req,res) {
	var j = sportBooks.getAll();
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Header", "Origin, X-Requested-With,Content-Type, Accept");
	res.set("Content-Type", "application/json");
	res.status(200);
	res.json(j);
});

//route id called, will activate the module - getByID - function that will return a JSON with the wanted book id details
app.get('/id', function(req,res) {
	var urlObj = url.parse(req.url,true);
	var query = urlObj.query;
	var j = sportBooks.getByID(query.id);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Header", "Origin, X-Requested-With,Content-Type, Accept");
	res.set("Content-Type", "application/json");
	res.status(200);
	res.json(j);
});

//route betweenPrice called, will activate the module - howManybooksBetweenPrices - function that in the wanted price range
app.get('/betweenPrice', function(req,res) {
	var urlObj = url.parse(req.url,true);
	var query = urlObj.query;
	var j = sportBooks.howManybooksBetweenPrices(parseInt(query.from),parseInt(query.to));
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Header", "Origin, X-Requested-With,Content-Type, Accept");
	res.set("Content-Type", "application/json");
	res.status(200);
	res.json(j);
});

//port for listening
app.listen(process.env.PORT || 3000);

//example of using the module functions

//return JSON with all the sportbooks
sportBooks.getAll();

//return null and will print to the log that a wrong value was sent, string instead of int
sportBooks.getByID("one");
//return JSON with the wanted id details if existed
sportBooks.getByID(111);

//return null and will print to the log that a wrong value was sent, string instead of int
sportBooks.howManybooksBetweenPrices("zero",20);
//return JSON with the wanted books in the price range if existed
sportBooks.howManybooksBetweenPrices(0,20);