// require express
var express = require ('express');
// create a new express app
var app = express();
// require path
var path = require('path');

// start up the server
var server = app.listen( 8080, 'localhost', function(){
  console.log('server is listening on port 8080');
});

// base url
app.get('/', function (req, res){
  console.log('base url get');
  res.writeHead(200);
  res.write('we are in the base url');
  res.end();
});

// another url
app.get('/kitties', function (req, res){
  console.log('kitties get');
  res.send('we are in the kitties url');
  res.send('we are still in kitties url');
  res.end();
});

// set up "public" folder for static files (can go to localhost:port/file to view);
app.use(express.static('public'));

// forms
//    action = url
//    method = get/post
// input fields
//    submit
//        sends input to action url with chosen method

app.get( '/processStuff', function(req, res){
  // receives a request from the form on getTest.hrml {route: gettinTestyWithIt}
  res.write( 'request received: ' + req.query.catNameIn );
  res.end();
});

app.get( '/gettinTestyWithIt', function(req, res){
  // basic view html file routing
  res.sendFile ( path.resolve('views/getTest.html'));
});
