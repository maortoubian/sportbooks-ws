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
	res.json(j);
});

//route id called, will activate the module - getByID - function that will return a JSON with the wanted book id details
app.get('/id', function(req,res) {
	var urlObj = url.parse(req.url,true);
	var query = urlObj.query;
	var j = sportBooks.getByID(query.id);
	res.json(j);
});

//route betweenPrice called, will activate the module - howManybooksBetweenPrices - function that in the wanted price range
app.get('/betweenPrice', function(req,res) {
	var urlObj = url.parse(req.url,true);
	var query = urlObj.query;
	var j = sportBooks.howManybooksBetweenPrices(parseInt(query.from),parseInt(query.to));
	res.json(j);
});

//port for listening
app.listen(process.env.PORT || 3000);

//example of using the module functions
sportBooks.getAll();
sportBooks.getByID(444);
sportBooks.howManybooksBetweenPrices(2,20);