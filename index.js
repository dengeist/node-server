var express = require("express");
var app = express();



app.get('/headers', function(request, response) {
    response.send(request.headers);
});

app.get('/headers/:header_name', function(request, response) {
    var headers = request.headers;
    var headerName = request.params.header_name;
    response.send(headers[headerName]);
});

app.listen(8080);
