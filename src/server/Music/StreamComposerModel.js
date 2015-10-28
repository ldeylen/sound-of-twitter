'use strict';

var NoteLibrary             = require('./StreamNoteLibrary');
var config                  = require('../Config/StreamComposerConfig');

class StreamComposerModel {

    constructor() {
        this.noteLibrary = new NoteLibrary();
        this.options = Object.assign({
            twitterSteamLength: 50
        }, config);


        this.twitterStream = {
            name: "Twitter Stream",
            notes: []
        };
    }


    addNewData(data){
        this.addNoteToStream(data);
    }

    addNoteToStream(object){
        var noteData = this.createNoteData(object.emojis);

        if(noteData) {
            object.notes = noteData;
            switch(object.type){
                case "twitter":
                    this.twitterStream.notes.push(object);
                    if (this.twitterStream.notes.length > this.options.twitterSteamLength)this.twitterStream.notes.shift();
                    break;
            }
        }
    }

    createNoteData(emojis){
        let totalEmojis = emojis.length;
        let layer1 = [];
        let layer2 = [];
        let layer3 = [];

        for(let i=0;i<totalEmojis;i++){
            let emojiHex = emojis[i];
            let noteData = this.noteLibrary.getNoteByUnicode(emojiHex);
            if(noteData) {
                switch (noteData.layer) {
                    case 1:
                        layer1.push(noteData.note);
                        break;
                    case 2:
                        layer2.push(noteData.note);
                        break;
                    case 3:
                        layer3.push(noteData.note);
                        break;
                }
            }
        }

        if(layer1.length == 0 && layer2.length == 0 && layer3.length == 0)return null;
        return {
            layer1: layer1,
            layer2: layer2,
            layer3: layer3
        }

    }

    getTwitterStream(){
        return this.twitterStream;
    }


}


module.exports = StreamComposerModel;