'use strict';

var musicPlayer;

class App {

    constructor(options){
        this.serverAddress = options.server;
        this.port = options.port;
    }

    init(){
        console.log("Sound of Twitter Init");
        this.createSocket();
        this.createMusicPlayer();

    }

    createSocket(){
        this.socket = io.connect(this.serverAddress + ':' + this.port);
        this.socket.on('new_tweet', function (data) {
            if(musicPlayer)musicPlayer.addTweet(data);
            //console.log(data);
        });
    }

    createMusicPlayer(){
        musicPlayer = new MusicPlayer({});
        musicPlayer.init();
    }



}