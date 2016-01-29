
var cheerio = require('cheerio');
var request = require('request');

var html, title, image;

var loadPage = function( cb ){
  request('http://frontenddevreactions.tumblr.com/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      html = cheerio.load(body);
      title = html('div.title').text();
      image = html('p', 'div.caption').html();
      cb( null, {'title': title, 'image': image} );
    } else {
      cb( error, null );
    }
  })
}

module.exports = loadPage;
