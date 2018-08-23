const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err,db) =>
{
    if(err){
       return console.log('unable to connect to db');
    }
    console.log('connection to DB ok');
   

db.collection('Todos').findOneAndDelete(
{

    completed:false
}


).then((result) =>
{
    console.log(result);
}

)

    
}



);