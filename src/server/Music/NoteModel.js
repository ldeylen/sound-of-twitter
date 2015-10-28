'strict mode';

//const EMOJI_REGEX = /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g;
const EMOJI_REGEX = /([\uD800-\uDBFF][\uDC00-\uDFFF])/;


class NoteModel {

    constructor (){

    }

    parseData(data){
        let emojis = this.getArray(data.text, false);
        if(emojis){
            data.emojis = emojis;
            return data;
        }
        return null;
    }

    getArray(string, allowDuplicates){
        if(string != null) {
            let emojis = this.find(string);
            if (emojis.length > 0) {
                if (!allowDuplicates)emojis = this.removeDuplicate(emojis);
                return emojis;
            }
        }
        return null;
    }

    find(string){
        let chunks = string.split(EMOJI_REGEX);
        let emojis = [];
        for (let i = 0; i < chunks.length; i++) {
            if (i % 2 > 0) {
                let pair = chunks[i];
                let codePoint = (0x10000 | ((pair.charCodeAt(0) - 0xD800) << 10) | (pair.charCodeAt(1) - 0xDC00));
                let hex = codePoint.toString(16);
                emojis.push(hex);
            }
        }
        return emojis;
    }

    //TODO Add remove duplicate code to remove multiple instances
    removeDuplicate(array){
        let i, j, cur, found;
        for (i = array.length - 1; i >= 0; i--) {
            cur = array[i];
            found = false;
            for (j = i - 1; !found && j >= 0; j--) {
                if (cur === array[j]) {
                    if (i !== j) {
                        array.splice(i, 1);
                    }
                    found = true;
                }
            }
        }
        return array;
    }

}

module.exports = NoteModel;