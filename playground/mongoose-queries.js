const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b8013402c4dbd5acad74e8611';

var userId = '5b7fe237bbd30ca2280ed577';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo)
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log('User', user);
}, (e) => {
    console.log(e);
}).catch((e) => console.log(e));