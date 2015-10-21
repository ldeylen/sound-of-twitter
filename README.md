# sound-of-twitter
Node.js application that analyses  a selection of recent tweets and converts them based on content into musical score.

version 0.1.0

## Features
- The proof of concept twitter-stream.html is up and working when you have the node server running.

## Config File
You need to make your own config file in the server folder with your own twitter app data for this to work.

```
var Config = {

    twitter : {
        consumer_key           : '######',
        consumer_secret        : '######'',
        access_token_key       : '######',
        access_token_secret    : '######''
    },

    app : {
        vhost:      'localhost',
        port:       3000
    },

    socketIO : {

    },
    database :{
        url: 'mongodb://localhost:27017/',
        name: 'sound-of-twitter'
    }
}

module.exports = Config;

```

## TO DO LIST
-Write the to do list