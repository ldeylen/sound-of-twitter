'use strict';

var colors                  = require('colors/safe');
var DataBaseInstance        = require('./MongoDB');


class Database {

    constructor(){
        this.database = new DataBaseInstance();
    }

    start(){
      this.database.start();
    }

}


module.exports = Database;