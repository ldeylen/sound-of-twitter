'strict mode';

//const EMOJI_REGEX = /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g;
const EMOJI_REGEX = /([\uD800-\uDBFF][\uDC00-\uDFFF])/;

class EmojiAnalyser {

    constructor (){

    }

    getArrayOfEmojis(text){
        if(text != undefined) {

            let emojis = this.findEmojis(text);
            if (emojis.length > 0)return emojis;
        }
        return null;
    }

    findEmojis(text){
        let chunks = text.split(EMOJI_REGEX);
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

}

module.exports = EmojiAnalyser;