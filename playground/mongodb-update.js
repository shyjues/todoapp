//const MongoClient = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

var user = {name: 'Hritesh', age:7};

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

    if(err){
        console.log('unable to connect to database');
    }else{
        console.log('Successfully connected to mongodb');
    }

    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID('59e343c16349d408a97b8bc9')},
    //     {$set: {
    //         text: 'finished something'
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // )
    // .then((result)=>{
    //     console.log(result);
    // });


 db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('59e51584923f560e7c2fd2f5')},
        {$set: {
            name: 'Shyju Subran'
            }
        },
        {
            $inc: {
                age: 1
            }
        }
        ,
        {
            returnOriginal: false
        }
    )
    .then((result)=>{
        console.log(result);
    });
    // db.collection('Users').deleteMany({name: 'Shyju'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('error has occured',err);
    // });

    // db.collection('Users').findOneAndDelete({name: 'Shyju'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console('error during find one and delte',err);
    // });

    db.close();

});