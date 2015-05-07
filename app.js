var express = require('express');
var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(
      "/", //the URL throught which you want to access to you static content
      express.static(__dirname) //where your static content is located in your filesystem
  );
});

var port = process.env.PORT || 8080;
app.listen(port); //the port you want to use
console.log('App started on: ' + port);

app.post('/api/data', function(req, res) {
  
  var isValid = false;
  if (req.body) {
  if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('color')) {
    isValid = true;   
  }  
  }
  
  if (!isValid) {
    return res.status(400).send('Post syntax incorrect.  Must have a name and color property.');
  } 
  else {
    var response = req.body.name + ' chose the color ' + req.body.color + '.';
    console.log(response);  
    return res.status(201).send(response)
  }
  
});