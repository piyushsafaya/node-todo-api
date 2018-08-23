var mongoose = require('mongoose');

var User = mongoose.model('User', 
{
    email:{
        type:String,
        required:true,
        minlength:4,
        trim:true

    },

    Name:{

        type:String,
        default:null
    },

    completedAt:{

        type:Number,
        default:null

    }

   

});

module.exports = {
    User: User
}


// var newUser = new User(
// {
  
// }

// );

// newUser.save().then((printdoc) => {
// console.log('saved User: ',printdoc);
// }, (e) => {
//     console.log('unable to save', e);
// }


    
// )