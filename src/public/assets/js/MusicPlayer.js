'use strict';

class MusicPlayer {

    constructor(options){
        this.options = Object.assign({
            tempo: 220
        }, options);
        this.totalNotes = 0;
        this.hasStarted = false;
    }

    init(){
        console.log("Music Player Init");



        this.createNewConductor();


    }

    createNewConductor(){
        if(this.conductor){
            this.conductor = null;
        }
        this.conductor = new BandJS();
        this.conductor.setTimeSignature(4,4);
        this.conductor.setTempo(this.options.tempo);

        this.rightHand = this.conductor.createInstrument('square', 'oscillators');
        this.leftHand = this.conductor.createInstrument('triangle', 'oscillators');
        this.drum = this.conductor.createInstrument('white', 'noises');
    }

    addTweet(data){
        this.totalNotes++;
        //console.log(data);
        this.addNote(data.notes);

        if(!this.hasStarted && this.totalNotes > 5){
            this.hasStarted = true;
            this.startSongSnippet();
        }
    }

    addNote(noteObject){

        let rightHandNotes = this.convertArrayToNote(noteObject.layer1);
        let leftHandNotes = this.convertArrayToNote(noteObject.layer2);
        let drumNotes = this.convertArrayToNote(noteObject.layer3);

        console.log(rightHandNotes, leftHandNotes, drumNotes);

        if(rightHandNotes === ""){
            this.rightHand.rest('quarter');
        } else {
            this.rightHand.note('quarter', rightHandNotes);
        }

        if(leftHandNotes === ""){
            this.leftHand.rest('quarter');
        } else {
            this.leftHand.note('quarter', leftHandNotes);
        }

        if(drumNotes === ""){
            this.drum.rest('quarter');
        } else {
            this.drum.note('quarter', drumNotes);
        }
    }

    startSongSnippet(){
        console.log(this.conductor);
        this.conductor.setOnFinishedCallback(() =>{
            //this.startSongSnippet();
            setTimeout(() =>{
                this.player = this.conductor.finish();
                console.log("Song End "+this.conductor.getTotalSeconds());
                this.player.setTime(0);
                this.player.play();
            },120);

        });
        this.player = this.conductor.finish();
        this.player.play();
        //this.createNewConductor();
    }

    convertArrayToNote(array){
        if(array.length == 0){
            return "";
        } else if(array.length == 1){
            return array[0];
        } else {
            var noteString = "";
            var arrayLength = array.length;
            for(var i = 0; i<arrayLength; i++){
                noteString += array[i];
                if(i <arrayLength-1)noteString+=",";
            }
            return noteString;
        }



    }



}