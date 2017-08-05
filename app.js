var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/math', function (req,res) {
	console.log('Math post hit');
	console.log(req.body);
	
})

app.listen(port, function() {
	console.log('listening on port', port);
});