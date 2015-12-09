var express = require('express');
var app = express();

var middleware = require('./middleware.js');

app.use(middleware.logger);

// Request, response
app.get('/about', middleware.requireAthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);