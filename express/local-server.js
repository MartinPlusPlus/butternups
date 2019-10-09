'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();

// viewed at http://localhost:3000

app.use(express.static(__dirname))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/Butters', function(req, res) {
    res.sendFile(path.join(__dirname + '/butters.html'))
});

app.get('/About', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'))
});

app.get('/Reviews', function(req, res) {
    res.sendFile(path.join(__dirname + '/reviews.html'))
});

app.get('/Contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'))
});

app.listen(3000);

module.exports.handler = serverless(app);
