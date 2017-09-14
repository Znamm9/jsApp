
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');


app.get('/', function (req, res) {
    res.send('Express app works fine');
});

app.get('/users', function (req, res) {
    var doc = new Object({
    	first : {username : "Jack Daniels", age : 65},
    	second : {username : "Jacky Chan", age : 60},
    	third : {username : "Arny", age : 70}
	});
    res.send(doc);
});

app.get('/index.css', function (req, res) {
    res.sendFile(path.resolve('./index.css'));
});

app.get('/gui', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
});

app.post('/user/65', function (req, res) {
    res.send(new Object({title : "Vhiskey", quantity : 100}));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
