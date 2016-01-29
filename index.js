var express = require('express');
var app = express();
var port;

app.get('/', function(req, res){
  res.send('hello world');
});

port = 3000;

app.listen(port, function () {
  console.log('Ready on '+port);
});
