// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const router = require('./server/router');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
var bodyParser = require('body-parser')

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.use(router(express))
// listen for requests :)

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app