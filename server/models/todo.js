var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', 
{
    text:{
        type:String,
        required:true,
        minlength:4

    },

    completed:{

        type:Boolean,
        default:true
    },

    completedAt:{

        type:Number,
        default:null
    }

   

});

module.exports = {
    Todo: Todo
}


// var newTodo = new Todo(
// {
//    text:true
// }

// );

// newTodo.save().then((printdoc) => {
// console.log('saved Todo: ',printdoc);
// }, (e) => {
//     console.log('unable to save', e);
// })
