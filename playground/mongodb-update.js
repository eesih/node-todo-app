const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b7d77ea2c4dbd5acad74e82")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOrginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b7fd9b12c4dbd5acad74e85")
    }, {
       $set: {
           name: 'Eero'
       },
       $inc: {
        age: -2
    }  
    }, {
        returnOrginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});