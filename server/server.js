var express = require('express');

var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');

var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());
app.post('/todo', (req,res) => 
{
    

    var newTodo = new Todo(
        {
           text:req.body.text
        }
        
        );

        newTodo.save().then((printdoc) => {
            res.send(printdoc);
            console.log('saved Todo: ',printdoc);
            }, (e) => {
                res.send(e);
            })

    
});

app.listen(3000, () => {

    console.log('Started on Port 3000');
}


)





