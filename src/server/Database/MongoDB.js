'use strict';

var colors              = require('colors/safe');
var mongo               = require('mongodb');

var config                  = require('../Config/MongoDbConfig');

class MongoDB {

    constructor(){
        this.client = null;


        this.options = Object.assign({
            url: 'mongodb://localhost:27017/',
            name: 'sound-of-twitter'
        } ,config);
    }

    start(){
        this.client = mongo.MongoClient;
        this.process((db)=>{
            console.log('Connected to MongoDB');
            db.close();
            //this.find("test", (results) => {console.log(results)});
        })


    }

    insert(collection, data, callback){
        this.process((db) => {
            db.collection(collection).insertOne(
                data,
                (error, results) => {
                    if (error) {
                        console.log(colors.red(error));
                    } else {
                        callback(results);
                    }
                    db.close();
                }
            )
        });
    }

    //TODO TEST UPDATE FUNCTIONS
    updateOne(collection, search, update, callback){
        this.process((db) => {
            db.collection(collection).updateOne(
                search,
                update,
                (error, results) => {
                    if (error) {
                        console.log(colors.red(error));
                    } else {
                        callback(results);
                    }
                    db.close();
                }
            )
        });
    }

    updateMany(collection, search, update, callback){
        this.process((db) => {
            db.collection(collection).updateMany(
                search,
                update,
                (error, results) => {
                    if (error) {
                        console.log(colors.red(error));
                    } else {
                        callback(results);
                    }
                    db.close();
                }
            )
        });
    }


    //TODO TEST DELETE FUNCTIONS
    deleteOne(collection, search, callback){
        this.process((db) => {
            db.collection(collection).updateOne(
                search,
                (error, results) => {
                    if (error) {
                        console.log(colors.red(error));
                    } else {
                        callback(results);
                    }
                    db.close();
                }
            )
        });
    }

    deleteMany(collection, search, callback){
        this.process((db) => {
            db.collection(collection).deleteMany(
                search,
                (error, results) => {
                    if (error) {
                        console.log(colors.red(error));
                    } else {
                        callback(results);
                    }
                    db.close();
                }
            )
        });
    }

    find(collection, callback){
        this.process((db) => {
            let cursor = db.collection(collection).find();
            let data = [];
            cursor.each((err, doc) => {
                if (doc != null) {
                    data.push(doc);
                    console.dir(doc);
                } else {
                    callback();
                }
            });

        });
    }

    process(process){
        this.client.connect(this.options.url+this.options.name, (error, db) => {
            if(error){
                console.log(colors.red(error));
            } else {
                process(db);
            }

        });
    }
}


module.exports = MongoDB;