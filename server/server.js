var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


http.listen('8800', function () {
    console.log('listening to port 8800');
})

io.on('connection', function() {
    console.log('connected');
})