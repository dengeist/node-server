var express = require("express");
var app = express();
var person = {
    name: 'Joe Schmoe',
    hobbies: 'Being a schmuck.',
    profession: 'Government Issued Supersoldier'
};

app.get('/', function(request, response){
  response.send(person.name);
});
app.listen(8080);
