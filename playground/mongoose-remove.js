const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove all {}
// Todo.remove({}).then((result) => {
//     console.log(result);
// });
//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()
Todo.findByIdAndRemove('5b81208340663b723f09114c').then((todo) => {
    console.log(todo);
});