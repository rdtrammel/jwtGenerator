var express = require('express');
var jwt = require('jsonwebtoken');
var base64url = require('base64url');

var app = express();

app.get('/', function (request, response) {

  var url_params = request.query; //Gets parameters from the url as a json object

  var claim = base64url.toBuffer(url_params.payload); //{base64encoded claim}

  var cert = base64url.decode(url_params.secret).replace(/\\n/g,'\n', /\^M/g,'\n'); //{base64encoded private key}

  var token = jwt.sign(claim, cert, { algorithm: 'RS256' });

  response.end(token);
});

app.listen(5000,function(){ 
  console.log('JWT generator listening on port 5000!' );
});
