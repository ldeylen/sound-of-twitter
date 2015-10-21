'use strict';

var NoteLibrary             = require('./NoteLibrary');


class Composer {

    constructor(options) {
        this.noteLibrary = new NoteLibrary();
    }

    createStream(name, maxLength){
        this.streamMaxLength = maxLength;
        this.streamComposition = {name: name, notes:[]};
    }

    addNoteToStream(object){
        var noteData = this.convertStreamToNotes(object.emojis);
        if(noteData) {
            object.notes = noteData;
            this.streamComposition.notes.push(object);
            if (this.streamComposition.notes.length > this.streamMaxLength)this.streamComposition.notes.shift();
            //console.log(this.streamComposition.notes.length);
        }
    }

    convertStreamToNotes(emojis){
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
        //TODO Remove duplicate Notes

        if(layer1.length == 0 && layer2.length == 0 && layer3.length == 0)return null;
        return {
            layer1: layer1,
            layer2: layer2,
            layer3: layer3
        }

    }

    getStreamComposition(){
        return this.streamComposition;
    }


}


module.exports = Composer;