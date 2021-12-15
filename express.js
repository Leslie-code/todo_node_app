const express = require('express');

const mongoose = require('mongoose');
const todoController = require('./contorllers/todoController');
const server = express();

const mongo_db_url = 'mongodb+srv://Leslie-code:0243049195Bernice@cluster0.e0mns.mongodb.net/todo_db?retryWrites=true&w=majority'

server.get('/todos',todoController.getAllTodos); 
server.post('/todos',todoController.insertTodo);
server.put('/todos', todoController.updateTodoById);
server.delete('/todos',todoController.deleteTodoById);

server.listen(4000, function(){
    console.log('Server has started running in express');
    mongoose.connect(mongo_db_url)
    .then (function(){
        console.log('DB is connected');
        
    })
    .catch (function(error){
        console.log('DB is not connected:',error.message);
    })
});
