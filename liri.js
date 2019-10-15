
require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");



//module to write output to console & log.txt
var log = require('simple-node-logger').createSimpleFileLogger(filename);
log.setLevel('all');

var userCommand = process.argv[2];
var secondCommand = process.argv[3];

for (var i = 4; i < process.argv.length; i++) {
    secondCommand += '+' + process.argv[i];
}