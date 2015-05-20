var SportBooks = require('./sportBooks');
var express = require('express');
var url = require('url');

var app =  express();
var sportBooks = new SportBooks;

app.get('/', function(req,res) {
	res.send("sportBooks ws root");
});

app.get('/showAllSportBooks', function(req,res) {
	var j = sportBooks.getAll();
	res.json(j);
});

app.get('/id', function(req,res) {
	var urlObj = url.parse(req.url,true);
	var query = urlObj.query;
	var j = sportBooks.getByID(query.id);
	res.json(j);
});

app.get('/betweenPrice', function(req,res) {
	var urlObj = url.parse(req.url,true);
	var query = urlObj.query;
	var j = sportBooks.howManybooksBetweenPrices(parseInt(query.from),parseInt(query.to));
	res.json(j);
});


app.listen(process.env.PORT || 3000);

//example of using the module functions
sportBooks.getAll();
sportBooks.getByID(444);
sportBooks.howManybooksBetweenPrices(2,20);