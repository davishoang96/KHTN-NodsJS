var http = require('http');
var server = http.createServer();
var qs = require('querystring');
var fs = require('fs');

//module xay dung
var xinchao = require('./modules/xinchao');

server.on('request', function(req, res){
    console.log('Server connected');
    
    xinchao.inXinchao2(req, res);
    
  
}).listen(3000);
