const express = require('express');
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
const server = express();
const mongo_db_url = 'mongodb+srv://Bruce:0243049195Bernice@cluster0.prjwh.mongodb.net/todo_db?retryWrites=true&w=majority'

server.use(express.json());

server.listen(4000, function(){
    console.log('Server has started running in express');
    mongoose.connect(mongo_db_url)
    .then (function(){
        console.log('DB is connected');
        server.get('/todos',todoController.getAllTodos); 
        server.get('/todo/.id',todoController.getTodoById);
        server.post('/todo',todoController.insertTodo);
        server.put('/todos/.id', todoController.updateTodoById);
        server.delete('/todo',todoController.deleteTodoById);
        
    })
    .catch (function(error){
        console.log('DB is not connected:',error.message);
    })
});
