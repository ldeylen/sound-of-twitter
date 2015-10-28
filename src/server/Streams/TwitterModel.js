'use strict';

var colors                  = require('colors/safe');
var Twitter                 = require('twitter');

var config                  = require('../Config/TwitterConfig');


class TwitterStream {

    constructor(eventEmitter){
        this.eventEmitter = eventEmitter;

        this.options = Object.assign({
            feedObject             : {track: 'the'},
            consumer_key           : '',
            consumer_secret        : '',
            access_token_key       : '',
            access_token_secret    : ''
        }, config);

    }

    start(){
        this.client = new Twitter({
            consumer_key: this.options.consumer_key,
            consumer_secret: this.options.consumer_secret,
            access_token_key: this.options.access_token_key,
            access_token_secret: this.options.access_token_secret
        });

        this.createStream();

    }

    createStream(){
        this.client.stream('statuses/filter', this.options.feedObject, (stream) => {
            stream.on('data', (data) => {
                //if(data.id != undefined)console.log(data);
                if(data.id){
                    let object = this.createMetaData(data);
                    //console.log(object);
                    this.eventEmitter.emit('NEW_STREAM_DATA', object);
                }
            });

            stream.on('error', (error) => {
                console.log("Twitter Stream Error - ", colors.red(error));
            });
        });
    }

    createMetaData(data) {
        return {
            type: "twitter",
            created: data.created_at,
            author: data.user.screen_name,
            text: data.text
        }
    }
}

module.exports = TwitterStream;


