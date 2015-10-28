'use strict';

var musicPlayer;

class LatestTrack {

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
                if(request.responseText) {
                    this.compositionData = JSON.parse(request.responseText);
                    //console.log( "Data: " + JSON.stringify(this.compositionData));
                    this.buildComposition();
                } else {
                    console.log("There is not track data available");
                }
                //this.buildView();
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
        //document.getElementById('stream-name').innerHTML= this.compositionData.name;
        //let html = "";
        //let notes = this.compositionData.notes;
        //let totalNotes = notes.length;
        //for(var i = 0; i < totalNotes; i++){
        //    var note = notes[i];
        //    html+='<li class="note-element"><p>'+note.text+'</p></li>';
        //}
        //console.log('HTML - '+html);
        //document.getElementById('data-list').innerHTML = html
        //this.selectedNote = 0;
        //this.playThrough();
    }

    playThrough(){
        //var element = document.getElementsByClassName('note-element')[this.selectedNote];
        //element.style.backgroundColor = "#00ff00";
        //this.selectedNote ++;
        //if(this.selectedNote < 50) {
        //
        //    setTimeout(()=> {
        //        this.playThrough();
        //    }, 310);
        //}

    }


    buildComposition(){
        console.log(JSON.stringify(this.compositionData));
        let baseLine = this.compositionData.lengthBars;
        console.log(baseLine);
        let mainLine1 = this.compositionData.emojiBars;
        //let mainLine2 = this.compositionData.otherBars;
        var totalBars = baseLine.length;

        for(let i=0;i<totalBars;i++){
            this.createBars(this.bassInstrument, baseLine[i]);
            this.createBars(this.mainInstrument1, mainLine1[i]);
            //this.createBars(this.mainInstrument2, mainLine2[i]);
        }

        console.log(this.mainInstrument1);
        //console.log(this.mainInstrument2);
        console.log(this.bassInstrument);
        this.startSongSnippet();
    }

    createBars(instrument, barArray){
        var totalNotes = barArray.length;

        for(let i=0;i<totalNotes;i++){
            var note = barArray[i];
            //console.log(note);
            switch (note.type){
                case 1:
                    if(note.note != ""){
                        instrument.note('whole', note.note);
                    } else {
                        instrument.rest('whole');
                    }
                    break;
                case 2:
                    if(note.note != ""){
                        instrument.note('half', note.note);
                    } else {
                        instrument.rest('half');
                    }
                    break;
                case 4:
                    if(note.note != ""){
                        instrument.note('quarter', note.note);
                    } else {
                        instrument.rest('quarter');
                    }
                    break;
                case 8:
                    if(note.note != ""){
                        instrument.note('eighth', note.note);
                    } else {
                        instrument.rest('eighth');
                    }
                    break;
                case 16:
                    if(note.note != ""){
                        instrument.note('sixteenth', note.note);
                    } else {
                        instrument.rest('sixteenth');
                    }
                    break;
            }
        }
    }


    createNewConductor(){
        this.conductor = new BandJS();
        this.conductor.setTimeSignature(4,4);
        this.conductor.setTempo(160);
        this.conductor.setMasterVolume(0.8);

        this.mainInstrument1 = this.conductor.createInstrument('square', 'oscillators');
        //this.mainInstrument2 = this.conductor.createInstrument('triangle', 'oscillators');
        this.bassInstrument = this.conductor.createInstrument('square', 'oscillators');
    }



    startSongSnippet(){
        this.conductor.setOnFinishedCallback(() =>{
            this.resetInstrument(this.bassInstrument);
            this.resetInstrument(this.mainInstrument1);
            //this.resetInstrument(this.mainInstrument2);
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