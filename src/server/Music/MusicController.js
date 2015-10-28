'use strict';

var StreamComposerModel                = require('./StreamComposerModel');
var TrackComposterModel                = require('./TrackComposerModel');
var NoteModel                          = require('./NoteModel');


class MusicController {

    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.noteModel = new NoteModel();
        this.streamComposerModel = new StreamComposerModel();
        this.trackComposterModel = new TrackComposterModel(this.eventEmitter);
    }

    init(){
        this.trackComposterModel.init();
    }

    addNewData(data){
        let noteData = this.noteModel.parseData(data);
        if(noteData){
            this.streamComposerModel.addNewData(noteData);
            this.trackComposterModel.addNewData(noteData);
        }
    }

    getTwitterStream(){
        return this.streamComposerModel.getTwitterStream();
    }

    getLatestTrack(){
        return this.trackComposterModel.getLatestTrack();
    }


}


module.exports = MusicController;