// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//     linkURL = req.url;
//     dataURL = url.parse(linkURL, true);

//     var i = 1;

//     so1 = dataURL.query.so1 * 1;

//     res.write('Ban Cuu Chuong cua ' + so1 + ' la: \n');

//     for (i = 1; i <= 10; i++) {
//         result = so1 * i;
//         res.write(so1 + ' x ' + i + ' = ' + result + ' \n');
//     }

//     res.end();

// }).listen(80);

const myPort = 8000;
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());


http.createServer(app).listen(myPort);


app.get('/form', function(req, res){
    // res.sendfile('./form.html'); old version
    res.sendFile(__dirname + '/form.html');
});

app.post('/form', function(req, res){
    var getNumber = req.body.number1*1;
    
    for(i = 1; i<= 10; i++){
        result = getNumber * i;
  
        res.write(getNumber + ' x ' + i + ' = ' + result + ' \n');
    }
    // pass a local variable to the view
    
    res.end();
  
});




