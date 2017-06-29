const myPort = 3000;
var http = require('http');
var server = http.createServer();


var module_xuly = require('./modules/xulyChuoi.js');


server.on('request', function(req, res){


    console.log('Server connected');
    res.writeHeader(200 , {"Content-Type" : "text/html; charset=utf-8"});

    //module_xuly.camelize(req, res);

    // module_xuly.boDau_TiengViet(req, res);

    module_xuly.friendlyURL(req ,res );
    

 
}).listen(myPort);