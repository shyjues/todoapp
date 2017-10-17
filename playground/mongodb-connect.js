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

        // db.collection('Todos').find({_id: new ObjectID('59e343b470ae7208a7befacb')}).toArray().then((docs)=>{
        //     console.log(JSON.stringify(docs, undefined, 2));
        // },(err)=>{
        //     console.log('unable to fetch todo',err);
        // });

        db.collection('Todos').find().count().then((count)=>{
            console.log(count);
        },(err)=>{
            console.log('unable to fetch count',count);
        });

        db.collection('Users').find({name: 'Devna'}).toArray().then((docs)=>{
            console.log(JSON.stringify(docs, undefined, 2));
        },(err)=>{
            console.log('unable to get the details',err);
        });
    
    // db.collection('Todos').insertOne({
    //     text: 'Just do something',
    //     complete:false
    // },(err,result)=>{
    //     if(err){
    //         console.log('Unable to insert',err);
    //     }
    //     else{
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

    //Insert into docs into users collection

    // db.collection('Users').insertOne({
    //     name: 'Devna',
    //     age: 3,
    //     location: 'Sydney AU'
    // },(err,res)=>{
    //     if(err){
    //         console.log('unable to insert to users collection',err);
    //     }else{
    //         console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    //     }

    // });

    db.close();
});
