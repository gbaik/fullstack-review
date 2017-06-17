// var db = require('../database/index;')
var express = require('express');
var app = express();

var staticData = 'gbaik';

app.use(express.static(__dirname + '/../client/dist'));

app.get('https://api.github.com/users/gbaik/repos', function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('hello');
});

app.post('/repos/import', function (request, response) {
  var body = '';
  request.on('data', function(chunk) {
    body += chunk;
  }).on('end', function() {
    response.writeHead(201);
    body = JSON.parse(body);
    response.end();
  }).on('error', function() {
    response.end();
  })
});

// app.get('/repos', function (request, response) {
//   console.log('a')
//   response.send(response.data);
// });

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

