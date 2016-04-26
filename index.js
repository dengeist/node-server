var express = require("express");
var app = express();
var person = {
    name: 'Joe Schmoe',
    hobbies: 'Being a schmuck.',
    profession: 'Government Issued Supersoldier'
};

app.get('/', function(request, response){
  response.send(person);
});

app.get('/headers', function(request, response){
  response.send(request.headers);
});

app.get('/headers/:header_name', function(request, response){
  response.send(request.headers[request.params.header_name]);
  console.log(request.params.header_name);

});

app.get('/version', function(request, response){
  response.send(request.httpVersion);
  console.log(request.httpVersion);

});

app.listen(8080);
