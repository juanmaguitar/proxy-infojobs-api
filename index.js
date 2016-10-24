var express = require('express');
var request = require('request');
var path = require('path');
var cors = require('cors');

var app = express();

var publicFolder = path.join(__dirname, 'public');

var user = process.env.CLIENT_ID;
var pass = process.env.CLIENT_SECRET;
var port = process.env.PORT;

var auth = "Basic " + new Buffer(user + ":" + pass).toString("base64");

var configRequest = {
	headers : { "Authorization" : auth }
};

app.get('/offer', cors(), function( req, res ) {

	configRequest.url  = 'https://api.infojobs.net/api/1/offer';

	if (Object.keys(req.query).length) {
		configRequest.qs = req.query;
	}

	request( configRequest, function(error, response) {

		var objectJSON = JSON.parse(response.body);
		res.json(objectJSON)

	});

})

app.get('/offer/:id', cors(), function( req, res ) {

	configRequest.url  = 'https://api.infojobs.net/api/1/offer/' + req.params.id;

	if (Object.keys(req.query).length) {
		configRequest.qs = req.query;
	}

	request( configRequest, function(error, response) {

		var objectJSON = JSON.parse(response.body);
		res.json(objectJSON)

	});

})

app.use( express.static(publicFolder) );

app.listen(process.env.PORT || '8081');

console.log('Magic happens on port 8081');