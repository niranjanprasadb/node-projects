var express = require('express');

var app = express();
app.set('view engine', 'ejs');


app.get('/', function(request, response){
//  response.sendFile(__dirname + '/index.html');
  response.render('index');
});

app.get('/contact', function(request, response){
//  response.sendFile(__dirname + '/contact.html');
  response.render('contact');
});

app.get('/profile/:name', function(request, response){
  var data = {age: 5, class:'UKG', hobbies:['playing', 'watchingTab']};
  response.render('profile', {person:request.params.name, data:data});
});

app.listen(3000);
