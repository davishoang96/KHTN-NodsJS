
const myPort = 3000;
var http = require('http');
var server = http.createServer();

// bai 2.3

// var EventEmitter = require('events').EventEmitter;
// my_Event = new EventEmitter;

// my_Event.on('LangNghe', function(){
//     console.log('Event has been called');
// })


// server.on('request', function(req, res){

//     if (req.url === '/favicon.ico') {

//         // stop favicon
//         res.writeHead(200, {'Content-Type': 'image/x-icon'} );
//         res.end(/* icon content here */);


//     } else {
//         console.log('Server Connected');

//         my_Event.emit('LangNghe');

//         res.end('OK');
//     }

    
// }).listen(myPort);


// bai 2.4

var EventEmitter = require('events').EventEmitter;
my_Event = new EventEmitter;

my_Event.on('LangNghe', function(res){
    console.log('Event has been called');
    res.end('run command in event');
});

server.on('request', function(req, res){

    if (req.url === '/favicon.ico') {

        // stop favicon
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end(/* icon content here */);


    } else {
        console.log('Server Connected');

        my_Event.emit('LangNghe', res);

        res.end('OK');
    }

    
}).listen(myPort);
