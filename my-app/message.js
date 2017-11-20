// message.js - Message route module

var express = require('express');
var router = express.Router();

const messages = ['Lets Go', 'What are you going to do?', 'This move is critical', 'It is getting interesting', 'Did you leave yourself an opening?', 'Time is running out', 'This is it!', 'Almost too late', 'Game over', 'WHAT????'];
// Home page route
router.get('/', function(req, res) {
	console.log('REQ Message:', req.query.msg);
	res.status(200);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({resp: messages[parseInt(req.query.msg, 10)]}));
	  //res.send(JSON.stringify({resp: 'hello'}));
});

// About page route
router.get('/about', function(req, res) {
  res.send('About Messages');
});

module.exports = router;