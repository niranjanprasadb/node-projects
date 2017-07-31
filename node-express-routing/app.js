var express = require('express');

var app = express();

app.get('/home', function(request, response){
  response.send("This is Home Page");
});

app.get('/contact', function(request, response){
  response.send("This is Contact Page");
});

app.get('/profile/:id', function(request, response){
  response.send(`You requested to see a profile with id ${request.params.id}`);
});

app.listen(3000);
