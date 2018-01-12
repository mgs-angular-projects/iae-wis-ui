var http = require('http');
var https = require('https');
var httpProxy = require('http-proxy');
var fs = require('fs');
const cors = require('cors');
var express = require('express');

var app = express();
app.set('base', '/dashboard');
//app.use('/dashboard',require('./dashboard'))
app.use(express.static(__dirname + '/dashboard'));
app.use(cors());
app.options('*', cors());
app.listen(8091);
console.log('Server running at http://localhost:8091/');

/*
 * CORS Support in my Node.js web app written with Express
 */

// http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
});
// handle OPTIONS requests from the browser
app.options("*", function(req,res,next){res.send(200);});
