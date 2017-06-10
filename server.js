var express = require('express');

var app = express();

app.use(express.static(__dirname + '/'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(9000, function () {
    console.log('Server is up and running on port 9000');
})