'use strict';

var events                  = require('events');
var express                 = require('express');
var path                    = require('path');
var vhost                   = require('vhost');
var colors                  = require('colors/safe');


var SocketApi               = require('./SocketApi');
var Database                = require('./Database/Database');
var StreamProcessor         = require('./Streams/StreamController');
var MusicController         = require('./Music/MusicController');
var config                  = require('./Config/AppConfig');

var app                     = express();
var http                    = require('http').Server(app);
var socketIO                = require('socket.io')(http);



/*
 *      Main application
 *
 *      @author Luke Deylen <ldeylen@gmail.com>
 *      @package sound-of-twitter
 */

class App {

    constructor(){

        this.options = Object.assign({
            vhost:      'localhost',
            port:       3000
        }, config);

        this.eventEmitter = new events.EventEmitter();
    }

    init(){
        this.startServer(() => {
            this.startMusic();
            this.startSocketApi();
            this.startStreamProcessor();
            this.setGetRequests();
            //this.startDatabase();
        });
    }

    startServer(callback) {

        // Initialize http Middle wares
        app.use(vhost(this.options.vhost, express.static(path.join(__dirname, '../public'), {maxAge: 86400000})));

        // boot the server
        http.listen(this.options.port, () => {
            if(callback)callback();
            console.log(colors.green('>> Http: server listening on port ' + this.options.port + ' in %s mode'), app.settings.env);
        });
    }

    startSocketApi() {
        this.socketApi = new SocketApi(socketIO);
        this.socketApi.start();
    }


    startStreamProcessor(){
        this.streamProcessor = new StreamProcessor(this.eventEmitter);
        this.streamProcessor.start();

        this.eventEmitter.on('NEW_STREAM_DATA', (data) =>{
            //console.log(data);
            this.musicController.addNewData(data);
        });
    }

    startMusic(){
        this.musicController = new MusicController(this.eventEmitter);
        this.musicController.init();
    }

    startDatabase(){
        this.database = new Database();
        this.database.boot();
    }

    setGetRequests(){
        app.get('/twitterCompositionStream', (req, res) => {
            res.send(this.musicController.getTwitterStream());
        });
        app.get('/latestTrack', (req, res) => {
            res.send(this.musicController.getLatestTrack());
        });
    }

}

module.exports = App;