var express = require('express');
var path = require('path');

var app = express(); 

/* Add a route to the server:
app.get(<route string>, function(req, res) {
    res.sendFile(path.join(__dirname, <path to file>));
});

note that <path to file> should be relative to the src directory
*/
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Declare a static folder so our html files can pull the resources they need
app.use('/', express.static(path.join(__dirname, '/')));

app.listen(process.env.PORT, process.env.IP);