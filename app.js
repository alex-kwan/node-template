var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.sendfile('./views/index.html');
});

app.get('/dev', function(req, res){
	res.sendfile('./views/dev.html');
});

app.listen(3000);