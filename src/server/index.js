'use strict';

var App             = require('./App');
var colors	        = require('colors/safe');
//var argv            = require('yargs').argv;


/*
 |-------------------------------------------------------------
 | Sound of Twitter Server
 |-------------------------------------------------------------
 | This is an application the tracks the emoji's on twitter and allows people to hear the emotions
 | @author Luke Deylen
 |
 */


var app = new App();

app.startServer(() => {
    app.startSocketApi();
    app.startTwitterFeed();
    //app.startDatabase();

});
