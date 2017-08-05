//Requires
var express = require('express');
var bodyParser = require('body-parser');

//Globals
var app = express();
var port = 5000;
var mathResult = [];

//Calculator function
function calculate(prop1, prop2, prop3) {
	
	if (prop3 === 'add') {
		mathResult = [+prop1 + +prop2];
	}else if (prop3 === 'subtract') {
		mathResult = [+prop1 - +prop2];
	}else if (prop3 === 'multiply') {
		mathResult = [+prop1 * +prop2];
	}else{
		mathResult = [(+prop1 / +prop2)];
	};
	return mathResult;	
};


 

//Uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//User Input post route
app.post('/math', function (req,res) {
	calculate(req.body.input1, req.body.input2, req.body.type);
	console.log(mathResult);
	res.sendStatus(201);			
})

app.get('/math', function (req,res) {
	res.send(mathResult); 
})


//Server spin up
app.listen(port, function() {
	console.log('listening on port', port);
});