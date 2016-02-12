'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

var host, port;

if(process.env.NODE_ENV === 'production') {
  host = 'deeptest001.herokuapp.com',
  port = process.env.PORT;
} else {
  host = 'localhost',
  port = '3000';
}


app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on http://'+host+':'+port);
});
