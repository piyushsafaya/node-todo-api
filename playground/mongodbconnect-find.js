const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err,db) =>
{
    if(err){
       return console.log('unable to connect to db');
    }
    console.log('connection to DB ok');
   
//     db.collection('Todos').find({completed:true}).toArray().then((abc) =>

//     {
//         console.log('Todos');
//         console.log(JSON.stringify(abc,undefined, 2));

//     }, (err) =>
// {
//     console.log('unable to fetch todos');
// }


// );


db.collection('Todos').find().count().then((count) =>

{
    console.log('Todos count = '+count);
    

}, (err) =>
{
console.log('unable to fetch todos');
}


);

    
}



);