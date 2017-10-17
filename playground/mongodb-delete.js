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

    // db.collection('Users').deleteMany({name: 'Shyju'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('error has occured',err);
    // });

    db.collection('Users').findOneAndDelete({name: 'Shyju'}).then((result)=>{
        console.log(result);
    },(err)=>{
        console('error during find one and delte',err);
    });

    db.close();

});