var express = require('express');
var app = express();
var message = require('./message.js');

app.use('/message', message);

app.use(express.static('build'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});