
var TwitterStream           = require('./TwitterModel');

/*
 * STREAMS
 *
 *
 *
 */


class StreamProcessor {

    constructor(eventEmitter){
        this.eventEmitter = eventEmitter;
    }

    start(){
        this.createTwitterStream();
    }

    createTwitterStream(){
        this.twitterStream = new TwitterStream(this.eventEmitter);
        this.twitterStream.start();
    }


}

module.exports = StreamProcessor;
