'use strict';

var events                  = require('events');
var express                 = require('express');
var app                     = express();
var http                    = require('http').Server(app);
var socketIO                = require('socket.io')(http);
var path                    = require('path');
var vhost                   = require('vhost');

var colors                  = require('colors/safe');

/* Local Classes */
var SocketApi               = require('./SocketApi');
var Database                = require('./Database');
var TwitterFeed             = require('./TwitterFeed');
var Config                  = require('./Config');

/*
 *      Main application
 *
 *      @author Luke Deylen <ldeylen@gmail.com>
 *      @package sound-of-twitter
 */

class App {

    constructor(options){
        this.options = Object.assign(Config.app, options);
        this.eventEmitter = new events.EventEmitter();
    }

    startServer(callback) {

        // Initialize http Middle wares
        app.use(vhost(this.options.vhost, express.static(path.join(__dirname, '../public'), {maxAge: 86400000})));

        // boot the server
        http.listen(this.options.port, () => {
            if(callback)callback();
            console.log(colors.green('>> Http: server listening on port ' + this.options.port + ' in %s mode'), app.settings.env);
        });

        this.setGetRequests();

    }

    setGetRequests(){
        app.get('/twitterCompositionStream', (req, res) => {
            res.send(this.twitterFeed.getStreamComposition());
        });
    }

    startSocketApi() {
        this.socketApi = new SocketApi(socketIO, Config.socketIO);
        this.socketApi.start();
    }


    startTwitterFeed(){
        this.twitterFeed = new TwitterFeed(Config.twitter,this.eventEmitter);
        this.twitterFeed.start();
        //
        //this.eventEmitter.on('NEW_TWEET', (data) =>{
        //    console.log(data);
        //});
    }

    startDatabase(){
        this.database = new Database(Config.database);
        this.database.boot();
    }


}

module.exports = App;