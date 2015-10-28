'use strict';

var musicPlayer;

class StreamComposition {

    constructor(dataURL){
        this.dataURL = dataURL;
        this.compositionData;

        this.selectedNote = 0;
    }

    init(){
        console.log("Sound of Twitter Init");
        //this.createMusicPlayer();
        this.createNewConductor();
        this.getData();

    }

    getData(){
        let request = new XMLHttpRequest();
        request.open('GET', this.dataURL, true);
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                this.compositionData = JSON.parse(request.responseText);
                //console.log( "Data: " + JSON.stringify(this.compositionData));
                this.buildComposition();
                this.buildView();
            } else {
                //TODO ADD DATA ERROR HANDLER
            }
        };

        request.onerror = () => {
            //TODO ADD SERVER IS NOT AVAILABLE HANDLER
        };

        request.send();

    }

    buildView(){
        document.getElementById('stream-name').innerHTML= this.compositionData.name;
        let html = "";
        let notes = this.compositionData.notes;
        let totalNotes = notes.length;
        for(var i = 0; i < totalNotes; i++){
            var note = notes[i];
            html+='<li class="note-element"><p>'+note.text+'</p></li>';
        }
        console.log('HTML - '+html);
        document.getElementById('data-list').innerHTML = html
        this.selectedNote = 0;
        this.playThrough();
    }

    playThrough(){
        var element = document.getElementsByClassName('note-element')[this.selectedNote];
        element.style.backgroundColor = "#00ff00";
        this.selectedNote ++;
        if(this.selectedNote < 50) {

            setTimeout(()=> {
                this.playThrough();
            }, 310);
        }

    }


    buildComposition(){
        let notes = this.compositionData.notes;
        let totalNotes = notes.length;
        for(var i = 0; i < totalNotes; i++){
            var note = notes[i];
            this.addNote(note.notes);
        }
        this.startSongSnippet();
    }


    createNewConductor(){
        this.conductor = new BandJS();
        this.conductor.setTimeSignature(4,4);
        this.conductor.setTempo(160);

        this.layer1 = this.conductor.createInstrument('square', 'oscillators');
        this.layer2 = this.conductor.createInstrument('triangle', 'oscillators');
        this.layer3 = this.conductor.createInstrument('sawtooth', 'oscillators');
    }


    addNote(noteObject){

        let layer1Notes = this.convertArrayToNote(noteObject.layer1);
        let layer2Notes = this.convertArrayToNote(noteObject.layer2);
        let layer3Notes = this.convertArrayToNote(noteObject.layer3);

        if(layer1Notes === ""){
            this.layer1.rest('quarter');
        } else {
            this.layer1.note('quarter', layer1Notes);
        }

        if(layer2Notes === ""){
            this.layer2.rest('quarter');
        } else {
            this.layer2.note('quarter', layer2Notes);
        }

        if(layer3Notes === ""){
            this.layer3.rest('quarter');
        } else {
            this.layer3.note('quarter', layer3Notes);
        }
    }

    startSongSnippet(){
        this.conductor.setOnFinishedCallback(() =>{
            this.resetInstrument(this.layer1);
            this.resetInstrument(this.layer2);
            this.resetInstrument(this.layer3);
            this.getData();

        });
        this.player = this.conductor.finish();
        this.player.setTime(0);
        this.player.play();
    }

    resetInstrument(instrument){
        instrument.notes = [];
        instrument.totalDuration = 0;
        //instrument.resetDuration();

    }

    convertArrayToNote(array) {
        if (array.length == 0) {
            return "";
        } else if (array.length == 1) {
            return array[0];
        } else {
            var noteString = "";
            var arrayLength = array.length;
            for (var i = 0; i < arrayLength; i++) {
                noteString += array[i];
                if (i < arrayLength - 1)noteString += ",";
            }
            return noteString;
        }
    }

}