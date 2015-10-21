'use strict';

var colors                  = require('colors/safe');
var Twitter                 = require('twitter');


var EmojiAnalyser           = require('./EmojiAnalyser');
var Composer                = require('./Music/Composer');



class TwitterFeed {

    constructor(options, eventEmitter){
        this.eventEmitter = eventEmitter;
        this.emojiAnalyser = new EmojiAnalyser();
        this.totalTweets = 0;
        this.totalTweetsWithEmojis = 0;
        this.composer = new Composer();


        this.options = Object.assign({
            feedObject             : {track: 'the'},
            consumer_key           : '',
            consumer_secret        : '',
            access_token_key       : '',
            access_token_secret    : ''
        }, options);

    }

    start(){
        this.client = new Twitter({
            consumer_key: this.options.consumer_key,
            consumer_secret: this.options.consumer_secret,
            access_token_key: this.options.access_token_key,
            access_token_secret: this.options.access_token_secret
        });
        this.composer.createStream("Twitter Stream", 50);

        this.createStream();

    }

    createStream(){
        this.client.stream('statuses/filter', this.options.feedObject, (stream) => {
            stream.on('data', (tweet) => {
                this.processTweetData(tweet)
            });

            stream.on('error', (error) => {
                console.log("Twitter Stream Error - ", colors.red(error));
            });
        });
    }

    processTweetData(tweet){
        this.totalTweets ++;
        let emojis = this.emojiAnalyser.getArrayOfEmojis(tweet.text);
        if(emojis){
            var object = Object.assign({emojis: emojis}, this.createMetaData(tweet));
            this.totalTweetsWithEmojis++;
            this.composer.addNoteToStream(object);

            //this.eventEmitter.emit('NEW_TWEET', object);
        }
    }

    createMetaData(tweet){
        return {
            type: "Twitter",
            created: tweet.created_at,
            author: tweet.user.screen_name,
            text: tweet.text
        }
    }

    getStreamComposition(){
        return this.composer.getStreamComposition();
    }



}

module.exports = TwitterFeed;


