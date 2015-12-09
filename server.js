var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

// Request, response
app.get('/about', middleware.requireAthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(port);