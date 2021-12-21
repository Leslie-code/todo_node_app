require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
const server = express();
// const mongo_db_url = '';

server.use(express.json());

server.listen(4000, function(){
    console.log('Server has started running in express');
    mongoose.connect(process.env.MONGO_DB_ATLAS)
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
