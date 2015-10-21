'use strict';

var colors   = require('colors/safe');

class SocketApi {

    constructor(socketIO, options) {

        this.options = Object.assign({

        }, options);

        this.io = socketIO;

    }

    emit(event, data) {
        this.io.emit(event, data);
    }

    start() {

        this.io.sockets.on('connection', (client) => {

            console.log(colors.green('>> Socket: user connected.'));


        });
    }
}

module.exports = SocketApi;