const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err,db) =>
{
    if(err){
       return console.log('unable to connect to db');
    }
    console.log('connection to DB ok');
   
    // db.collection('Todos').insertOne(
    //     {
    //         text:'3rd document',
    //         completed:false

    //     }, (err,result) =>
    //     {

    //         if (err)
    //         {

    //            return console.log('error in insert document');
    //         }
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }




    // );

    db.collection('Users').insertOne(
        {
           
            name:'Piyush4',
            age:32,
            location:'Dubai4'

        }, (err,result) =>
        {

            if (err)
            {

               return console.log('error in insert document',err);
            }
            console.log(result.ops[0]._id.getTimestamp());
        }




    );



    db.close();
}



);