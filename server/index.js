var express = require('express');
var app = express();
var db = require('../database/index')

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (request, response) {
  var body = '';
  request.on('data', function(chunk) {
    body += chunk;
  }).on('end', function() {
    response.writeHead(201);
    body = JSON.parse(body);
    var newEntry = new db({repos: body});
    newEntry.save((err) => {
      if (err) return console.log(err);
    });
    // db.remove({repos: 'test'}, (err) => {
    //   if (err) return console.log(err);
    // });
    response.end();
  }).on('error', function() {
    response.end();
  })
});

/*TODO: GET / BROKEN, FIX LATER*/

// app.get('/repos', function (request, response) {
//   console.log('a')
//   response.send(response.data);
// });

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

