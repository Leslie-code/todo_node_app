require('dotenv').config();
const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
const PORT = process.env.PORT || 4000;
const server = express();
// const mongo_db_url = '';

server.use(express.json());

server.get('/todos',todoController.getAllTodos); 
server.get('/todo/.id',todoController.getTodoById);
server.post('/todo',todoController.insertTodo);
server.put('/todos/.id', todoController.updateTodoById);
server.delete('/todo',todoController.deleteTodoById);

server.listen(PORT, function(){
    console.log('Server has started running in express');
    mongoose.connect(process.env.MONGO_DB_ATLAS)
    .then (function(){
        console.log('DB is connected');
        // server.get('/',)
      
        
    })
    .catch (function(error){
        console.log('DB is not connected:',error.message);
    })
});
