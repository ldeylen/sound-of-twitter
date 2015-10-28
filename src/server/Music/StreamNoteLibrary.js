'use strict';

class NoteLibrary {

    constructor() {

    }

    getNoteByUnicode (unicode){
        switch (unicode){
            case '1f601':
                return {layer: 1, note: "A4"};
                break;
            case '1f602':
                return {layer: 2, note: "A#4"};
                break;
            case '1f603':
                return {layer: 3, note: "A4"};
                break;
            case '1f604':
                return {layer: 1, note: "B4"};
                break;
            case '1f605':
                return {layer: 2, note: "B4"};
                break;
            case '1f606':
                return {layer: 3, note: "B4"};
                break;
            case '1f609':
                return {layer: 1, note: "C4"};
                break;
            case '1f60a':
                return {layer: 2, note: "C#4"};
                break;
            case '1f60b':
                return {layer: 3, note: "C4"};
                break;
            case '1f60c':
                return {layer: 1, note: "D4"};
                break;
            case '1f60d':
                return {layer: 2, note: "D#4"};
                break;
            case '1f612':
                return {layer: 3, note: "D4"};
                break;
            case '1f613':
                return {layer: 1, note: "E4"};
                break;
            case '1f614':
                return {layer: 2, note: "E4"};
                break;
            case '1f616':
                return {layer: 3, note: "E4"};
                break;
            case '1f618':
                return {layer: 1, note: "F4"};
                break;
            case '1f61a':
                return {layer: 2, note: "F#4"};
                break;
            case '1f61c':
                return {layer: 3, note: "F4"};
                break;
            case '1f61d':
                return {layer: 1, note: "G4"};
                break;
            case '1f61e':
                return {layer: 2, note: "G#4"};
                break;
            case '1f620':
                return {layer: 3, note: "G4"};
                break;

            case '1f621':
                return {layer: 1, note: "A5"};
                break;
            case '1f622':
                return {layer: 2, note: "A#5"};
                break;
            case '1f623':
                return {layer: 3, note: "A5"};
                break;
            case '1f624':
                return {layer: 1, note: "B5"};
                break;
            case '1f625':
                return {layer: 2, note: "B5"};
                break;
            case '1f628':
                return {layer: 3, note: "B5"};
                break;
            case '1f629':
                return {layer: 1, note: "C5"};
                break;
            case '1f62a':
                return {layer: 2, note: "C#5"};
                break;
            case '1f62b':
                return {layer: 3, note: "C5"};
                break;
            case '1f62d':
                return {layer: 1, note: "D5"};
                break;
            case '1f630':
                return {layer: 2, note: "D#5"};
                break;
            case '1f631':
                return {layer: 3, note: "D5"};
                break;
            case '1f632':
                return {layer: 1, note: "E5"};
                break;
            case '1f633':
                return {layer: 2, note: "E5"};
                break;
            case '1f635':
                return {layer: 3, note: "E5"};
                break;
            case '1f637':
                return {layer: 1, note: "F5"};
                break;
            case '1f638':
                return {layer: 2, note: "F#5"};
                break;
            case '1f639':
                return {layer: 3, note: "F5"};
                break;
            case '1f63a':
                return {layer: 1, note: "G5"};
                break;
            case '1f63b':
                return {layer: 2, note: "G#5"};
                break;
            case '1f63c':
                return {layer: 3, note: "G5"};
                break;

            case '1f63d':
                return {layer: 1, note: "A6"};
            break;
            case '1f63e':
                return {layer: 2, note: "A#6"};
                break;
            case '1f63f':
                return {layer: 3, note: "A6"};
                break;
            case '1f640':
                return {layer: 1, note: "B6"};
                break;
            case '1f645':
                return {layer: 2, note: "B6"};
                break;
            case '1f646':
                return {layer: 3, note: "B6"};
                break;
            case '1f647':
                return {layer: 1, note: "C6"};
                break;
            case '1f648':
                return {layer: 2, note: "C#6"};
                break;
            case '1f649':
                return {layer: 3, note: "C6"};
                break;
            case '1f64a':
                return {layer: 1, note: "D6"};
                break;
            case '1f64b':
                return {layer: 2, note: "D#6"};
                break;
            case '1f64c':
                return {layer: 3, note: "D6"};
                break;
            case '1f64d':
                return {layer: 1, note: "E6"};
                break;
            case '1f64e':
                return {layer: 2, note: "E6"};
                break;
            case '1f64f':
                return {layer: 3, note: "E6"};
                break;
            case '1f600':
                return {layer: 1, note: "F6"};
                break;
            case '1f607':
                return {layer: 2, note: "F#6"};
                break;
            case '1f608':
                return {layer: 3, note: "F6"};
                break;
            case '1f60e':
                return {layer: 1, note: "G6"};
                break;
            case '1f610':
                return {layer: 2, note: "G#6"};
                break;
            case '1f611':
                return {layer: 3, note: "G6"};
                break;
        //
        //    case '1f499':
        //        return {layer: 1, note: "A3"};
        //        break;
        //    case '1f615':
        //        return {layer: 2, note: "A#3"};
        //        break;
        //    case '1f617':
        //        return {layer: 3, note: "A3"};
        //        break;
        //    case '1f619':
        //        return {layer: 1, note: "B3"};
        //        break;
        //    case '1f61b':
        //        return {layer: 2, note: "B3"};
        //        break;
        //    case '1f61f':
        //        return {layer: 3, note: "B3"};
        //        break;
        //    case '1f626':
        //        return {layer: 1, note: "C3"};
        //        break;
        //    case '1f627':
        //        return {layer: 2, note: "C#3"};
        //        break;
        //    case '1f62c':
        //        return {layer: 3, note: "C3"};
        //        break;
        //    case '1f62e':
        //        return {layer: 1, note: "D3"};
        //        break;
        //    case '1f62f':
        //        return {layer: 2, note: "D#3"};
        //        break;
        //    case '1f634':
        //        return {layer: 3, note: "D3"};
        //        break;
        //    case '1f636':
        //        return {layer: 1, note: "E3"};
        //        break;
        //    case '1f493':
        //        return {layer: 2, note: "E3"};
        //        break;
        //    case '1f494':
        //        return {layer: 3, note: "E3"};
        //        break;
        //    case '1f495':
        //        return {layer: 1, note: "F3"};
        //        break;
        //    case '1f496':
        //        return {layer: 2, note: "F#3"};
        //        break;
        //    case '1f497':
        //        return {layer: 3, note: "F3"};
        //        break;
        //    case '1f498':
        //        return {layer: 1, note: "G3"};
        //        break;
        //    case '1f49e':
        //        return {layer: 2, note: "G#3"};
        //        break;
        //    case '1f49d':
        //        return {layer: 3, note: "G3"};
        //        break;
        //
        //
        //    case '1f49a':
        //        return {layer: 1, note: "A2"};
        //        break;
        //    case '1f49b':
        //        return {layer: 2, note: "A#2"};
        //        break;
        //    case '1f49c':
        //        return {layer: 3, note: "A2"};
        //        break;
        //    case '1f49f':
        //        return {layer: 1, note: "B2"};
        //        break;
        //    case '1f4a9':
        //        return {layer: 2, note: "B2"};
        //        break;
        //    case '2764':
        //        return {layer: 3, note: "B2"};
        //        break;
        //    case '270c':
        //        return {layer: 1, note: "C2"};
        //        break;
        //    case '270a':
        //        return {layer: 2, note: "C#2"};
        //        break;
        //    case '270b':
        //        return {layer: 3, note: "C2"};
        //        break;
        //    case '2708':
        //        return {layer: 1, note: "D2"};
        //        break;
        //    case '270f':
        //        return {layer: 2, note: "D#2"};
        //        break;
        //    case '2712':
        //        return {layer: 3, note: "D2"};
        //        break;
        //    case '1f31f':
        //        return {layer: 1, note: "E2"};
        //        break;
        //    case '1f320':
        //        return {layer: 2, note: "E2"};
        //        break;
        //    case '1f334':
        //        return {layer: 3, note: "E2"};
        //        break;
        //    case '1f335':
        //        return {layer: 1, note: "F2"};
        //        break;
        //    case '1f337':
        //        return {layer: 2, note: "F#2"};
        //        break;
        //    case '1f338':
        //        return {layer: 3, note: "F2"};
        //        break;
        //    case '1f339':
        //        return {layer: 1, note: "G2"};
        //        break;
        //    case '1f33a':
        //        return {layer: 2, note: "G#2"};
        //        break;
        //    case '1f33b':
        //        return {layer: 3, note: "G2"};
        //        break;
        //
        //    case '1f480':
        //        return {layer: 1, note: "A1"};
        //        break;
        //    case '1f440':
        //        return {layer: 2, note: "A#1"};
        //        break;
        //    case '1f483':
        //        return {layer: 3, note: "A1"};
        //        break;
        //    case '1f4aa':
        //        return {layer: 1, note: "B1"};
        //        break;
        //    case '1f451':
        //        return {layer: 2, note: "B1"};
        //        break;
        //    case '1f43b':
        //        return {layer: 3, note: "B1"};
        //        break;
        //    case '1f525':
        //        return {layer: 1, note: "C1"};
        //        break;
        //    case '1f450':
        //        return {layer: 2, note: "C#1"};
        //        break;
        //    case '1f433':
        //        return {layer: 3, note: "C1"};
        //        break;
        //    case '1f50c':
        //        return {layer: 1, note: "D1"};
        //        break;
        //    case '1f438':
        //        return {layer: 2, note: "D#1"};
        //        break;
        //    case '1f381':
        //        return {layer: 3, note: "D1"};
        //        break;
        //    case '1f4af':
        //        return {layer: 1, note: "E1"};
        //        break;
        //    case '1f448':
        //        return {layer: 2, note: "E1"};
        //        break;
        //    case '1f449':
        //        return {layer: 3, note: "E1"};
        //        break;
        //    case '1f48b':
        //        return {layer: 1, note: "F1"};
        //        break;
        //    case '1f44c':
        //        return {layer: 2, note: "F#1"};
        //        break;
        //    case '1f30d':
        //        return {layer: 3, note: "F1"};
        //        break;
        //    case '1f481':
        //        return {layer: 1, note: "G1"};
        //        break;
        //    case '1f41b':
        //        return {layer: 2, note: "G#1"};
        //        break;
        //    case '1f60f':
        //        return {layer: 3, note: "G1"};
        //        break;
        //
        }
        return null;
    }

}



module.exports = NoteLibrary;