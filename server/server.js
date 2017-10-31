var express = require('express');

var bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./todo');

var newTodo = new Todo({
    text: 'Cook Dinner'
});

// newTodo.save().then((doc)=>{
//     console.log('saved todo ',doc);
// },(err)=>{
//     console.log('Unable to save ',err);
// });

// var nextTodo = new Todo({
//     text: 'Devus Dinner',
//     completed: true,
//     completedAt: 123
// });

// nextTodo.save().then((doc)=>{
//     console.log('Saved the doc',doc);
// },(err)=>{
//     console.log('Unable to Save ',err);
// });

var app = express();

app.use(bodyparser.json());

app.post('/todos',(req,res)=>{
    //console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        console.log(doc);
        res.send(doc);     
    },(err)=>{
        res.send(err);
    });

});

app.listen(3000, ()=>{

    console.log('app started on port 3000....');
});

module.exports = {app};