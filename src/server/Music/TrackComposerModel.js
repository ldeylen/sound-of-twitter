var colors                  = require('colors/safe');

var config                  = require('../Config/TrackComposerConfig');
var TrackLibrary            = require('./TrackLibrary');

class TrackComposerModel {

    constructor(eventEmitter){
        this.eventEmitter = eventEmitter;
        this.options = Object.assign({
            tempo: 160,
            intervalLength: 120  //seconds
        }, config);

        this.requiredTweets = (this.options.intervalLength*1000)/((60000/this.options.tempo)*4);

        console.log(colors.yellow(">> TRACK COMPOSER SETTINGS >>> "));
        console.log(colors.yellow(this.requiredTweets+" Tweets needed per track"));
        console.log(colors.yellow("Tempo is set at "+this.options.tempo));
        console.log(colors.yellow("Interval created every "+this.options.intervalLength+" seconds"));

        this.latestTrack = null;
        this.currentData = null;
    }

    init(){
        this.trackLibrary = new TrackLibrary();
        this.createNewTrack();

    }

    createNewTrack(){
        console.log(colors.blue('----------- Creating New Track -----------'));
        let timeStamp = new Date().getTime();
        this.newTrack = {
            startTime: timeStamp,
            endTime: timeStamp + (this.options.intervalLength*1000),
            emojiBars: [],
            lengthBars: [],
            otherBars: [],
            data: [],
        }

        this.noteInterval = setInterval(()=>{
            this.createBar(this.currentData);
            this.currentData = null;
        }, (this.options.intervalLength/this.requiredTweets)*1000);

        setTimeout(()=>{
            this.intervalEnded();
        }, this.options.intervalLength*1000);
    }

    intervalEnded(){
        clearInterval(this.noteInterval);
        console.log("Composition = "+JSON.stringify(this.newTrack.emojiBars));
        console.log(colors.blue('----------- New Track Complete - Saving -----------'));
        this.latestTrack = Object.assign({}, this.newTrack);
        //TODO Trigger save latest Track
        this.eventEmitter.emit("NEW_TRACK_COMPLETE", this.latestTrack);
        this.createNewTrack();
    }

    createBar(data){
        console.log('Data selected for Bar - '+data);
        if(data){
            this.newTrack.emojiBars.push(this.trackLibrary.getEmojiBar(data, 0));
            this.newTrack.otherBars.push(this.trackLibrary.getEmojiBar(data, 1));
            this.newTrack.lengthBars.push(this.trackLibrary.getLengthBar(data.text));
        } else {
            this.newTrack.emojiBars.push(this.trackLibrary.fullRest());
            this.newTrack.lengthBars.push(this.trackLibrary.fullRest());
            this.newTrack.otherBars.push(this.trackLibrary.fullRest());
        }
        this.newTrack.data.push(data);
    }

    addNewData(data){
        if(this.currentData === null){
            if(this.trackLibrary.checkDataQualify(data))this.currentData = data;
        }
    }

    getLatestTrack(){
        return this.latestTrack;
    }
}

module.exports = TrackComposerModel;