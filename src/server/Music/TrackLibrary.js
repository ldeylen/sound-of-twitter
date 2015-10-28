'use strict';

class TrackLibrary {

    constructor(){
        this.approvedEmojis = ["1f60d", "1f60a", '1f602', '1f612', '1f62d', '1f618', '1f44c', '1f629', '1f614'];
    }

    checkDataQualify(data){
        let emojis = data.emojis;
        let totalEmojis = emojis.length;
        for(let i = 0; i < totalEmojis; i++){
            let emojiHex = emojis[i];
            for(let j = 0; j < this.approvedEmojis.length; j++){
                if(emojiHex.toUpperCase() === this.approvedEmojis[j].toUpperCase())return true;
            }
        }
        return false;
    }

    getEmojiBar(data, element){
        let emojis = data.emojis;
        //let totalEmojis = emojis.length;
        let bar;
        let unicode = emojis[element];
        if(unicode)bar = this.getBarByUnicode(emojis[element]);
        if(bar == null){
            bar =  this.fullRest();
        }
        return bar;
    }

    getBarByUnicode(unicode){
        switch (unicode.toLowerCase()){
            case "1f60d":
                return [
                    this.makeNote(4, "C5"),
                    this.makeNote(4, "A4"),
                    this.makeNote(2, "A4"),
                ]
                break;
            case "1f60a":
                return [
                    this.makeNote(8, ""),
                    this.makeNote(4, "D5"),
                    this.makeNote(8, "F5"),
                    this.makeNote(4, "A5"),
                    this.makeNote(8, "G5"),
                    this.makeNote(8, "F5"),
                ]
                break;
            case "1f602":
                return [
                    this.makeNote(4, "E5"),
                    this.makeNote(8, "B4"),
                    this.makeNote(8, "C5"),
                    this.makeNote(8, "D5"),
                    this.makeNote(16, "E5"),
                    this.makeNote(16, "D5"),
                    this.makeNote(8, "C5"),
                    this.makeNote(8, "B4"),

                ]
                break;
            case "1f612":
                return [
                    this.makeNote(8, "B4"),
                    this.makeNote(8, "C5"),
                    this.makeNote(8, "B4"),
                    this.makeNote(8, "C5"),
                    this.makeNote(4, "A4"),
                    this.makeNote(2, "C4"),

                ]
                break;
            case "1f62d":
                return [
                    this.makeNote(4, "B4"),
                    this.makeNote(4, "C5"),
                    this.makeNote(8, "B4"),
                    this.makeNote(4, ""),
                    this.makeNote(4, "C4"),
                ]
                break;
            case "1f618":
                return [
                    this.makeNote(2, "C4, E4"),
                    this.makeNote(2, "A3, C4"),
                ]
                break;
            case "1f44c":
                return [
                    this.makeNote(8, "B4"),
                    this.makeNote(8, ""),
                    this.makeNote(8, "B4"),
                    this.makeNote(8, ""),
                    this.makeNote(4, "A4"),
                    this.makeNote(2, ""),
                ]
                break;
            case "1f629":
                return [
                    this.makeNote(4, "B4"),
                    this.makeNote(4, "B4"),
                    this.makeNote(4, ""),
                    this.makeNote(4, "B4"),

                ]
                break;
            case "1f614":
                return [
                    this.makeNote(4, ""),
                    this.makeNote(4, "B4"),
                    this.makeNote(4, "C5"),
                    this.makeNote(4, ""),

                ]
                break;




        }
        return null;
    }

    getLengthBar(text){
        var textLength = text.length;
        console.log(textLength);
        if(textLength <= 40){
            return [
                this.makeNote(8, "E2"),
                this.makeNote(8, ""),
                this.makeNote(8, "E3"),
                this.makeNote(8, ""),
                this.makeNote(8, "E2"),
                this.makeNote(8, ""),
                this.makeNote(8, "E3"),
                this.makeNote(8, ""),
            ]
        } else if(textLength <= 50){
            return [
                this.makeNote(8, "E2"),
                this.makeNote(8, "E3"),
                this.makeNote(4, ""),
                this.makeNote(8, "E2"),
                this.makeNote(8, "E3"),
                this.makeNote(4, ""),
            ]
        } else if(textLength <= 60){
            return [
                this.makeNote(2, "A2"),
                this.makeNote(2, "E2"),
            ]
        } else if(textLength <= 70){
            return [
                this.makeNote(8, "G#2"),
                this.makeNote(8, "G#3"),
                this.makeNote(8, "G#2"),
                this.makeNote(8, "G#3"),
                this.makeNote(2, ""),
            ]
        } else if(textLength <= 80){
            return [
                this.makeNote(8, "A2"),
                this.makeNote(8, "A3"),
                this.makeNote(8, "A2"),
                this.makeNote(8, "A3"),
                this.makeNote(8, "A2"),
                this.makeNote(8, "A3"),
                this.makeNote(8, "B2"),
                this.makeNote(8, "C3"),
            ]
        } else if(textLength <= 90){
            return [
                this.makeNote(8, "A2"),
                this.makeNote(8, ""),
                this.makeNote(8, "B2"),
                this.makeNote(8, ""),
                this.makeNote(8, "A2"),
                this.makeNote(8, ""),
                this.makeNote(8, "B2"),
                this.makeNote(8, ""),
            ]
        } else if(textLength <= 100){
            return [
                this.makeNote(8, "G#2"),
                this.makeNote(8, "G#3"),
                this.makeNote(8, "G#2"),
                this.makeNote(8, "G#3"),
                this.makeNote(8, "E2"),
                this.makeNote(8, "E3"),
                this.makeNote(8, "E2"),
                this.makeNote(8, "E3"),
            ]
        } else if(textLength <= 110){
            return [
                this.makeNote(8, "E2"),
                this.makeNote(8, "E3"),
                this.makeNote(8, "E2"),
                this.makeNote(8, "E3"),
                this.makeNote(8, "E2"),
                this.makeNote(8, "E3"),
                this.makeNote(8, "E2"),
                this.makeNote(8, "E3"),
            ]
        } else if(textLength <= 120){
            return [
                this.makeNote(8, "A2"),
                this.makeNote(8, "E2"),
                this.makeNote(8, "A2"),
                this.makeNote(8, "E2"),
                this.makeNote(4, "A2"),
                this.makeNote(4, ""),
            ]
        } else {
            return [
                this.makeNote(8, "G#2"),
                this.makeNote(8, "G#3"),
                this.makeNote(4, ""),
                this.makeNote(8, "E2"),
                this.makeNote(8, "E3"),
                this.makeNote(4, ""),
            ]
        }


    }

    makeNote(type, note){
        return {type: type, note: note};
    }
    fullRest(){
        return [{type: 1, note: ""}]
    }



}

module.exports = TrackLibrary;