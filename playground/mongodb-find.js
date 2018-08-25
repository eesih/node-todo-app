//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    
    db.collection('Users').find({name: 'Eero'}).toArray().then((user) => {
       // console.log(`Todos count ${count}`);
        console.log(JSON.stringify(user, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.close();
});