var express = require('express');
var app = express();
var loadPage = require('./loadPage');

var port, myHtml;

app.get('/', function(req, res){
  loadPage( function( err, data){
    if( err ){
      res.send(err);
    } else {
      myHtml = '<h1>'+data.title+'</h1>';
      myHtml += data.image;
      myHtml += '<br><br><br>';
      myHtml += '<button onclick="location.reload();">Ricarica</button>';
      myHtml += '<br><br><br>';
      myHtml += 'powerd by <a href="/credits">cazzeggio</a>';
      res.send(myHtml);
    }
  })
});

app.get('/credits', function(req, res){
      res.send('Siamo al cazzeggio!!!!');
});

port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Ready on '+port);
});
