var express = require('express');
var router = express.Router();

var fs = require('fs');
var servers = [ 'http://127.0.0.1:5984', 'http://192.168.2.21:5984' ];
var nano = require('nano')(servers[0]);

var dbName = 'game_data_vendrovska';
router.get('/viewRaw', function(request, response) {
	'use strict';
	console.log("View called: " + JSON.stringify(request.query));

	var result = [];
/*
	if (request.query.level !== 1) {
		result.push({});
		response.send(result);
		return;
	}
	*/
	
	var nanoDb = nano.db.use(dbName);
	nanoDb.view(request.query.designDoc, request.query.view,
			function(err, body) {
				if (!err) {
					console.log(body);

					body.rows.forEach(function(doc) {
						result.push(doc.value);
						console.log(doc.value);
					});

					response.send(result);
				} else {
					console.log(err);
					response.send(500, err);
				}
			});
});

module.exports = router;
