const res = require('express/lib/response');
const todo = require('../models/todo');

async function insertTodo(req, res){
     console.log(req, res);
      todo.create(req.body)
     .then(function(){
         res.status(200).json ('Data has been created');

     })
     .catch(function(error){
        res.status(401).json ('Not created'+error.message);
     })
 }
 function updateTodoById(req, res){
    const { id } = req.params;
    const { isCompleted } = req.body;
    todo.findByIdAndUpdate(id, {isCompleted: isCompleted})
    .then(function(){
        res.status(200).json({success: true,message: 'Todo updated successfully'})
    })
    .catch(function(error){
        res.status(404).json({success: false,message: 'Todo cant update. Please try again'});
    })
 } 
 function deleteTodoById(req, res){
     const { id } = req.params.id;
     todo.findByIdAndDelete(id)
     .then(function(){
         res.status(200).json({success: true,message: 'Todo is deleted successfully'})
     })
     .catch(function(error){
         console.log('Cant delete todo: ', err.message);
         res.status(404).json({success: false, message: 'Cant delete todo. Please check'})
     })
  }
 function getTodoById(req, res){
    //  const { id } = req.params;
     console.log(req.params.id)
    todo.find({id})
    .then(function(){
        res.status(200).json({success: true, data})
    })
 }
 function getAllTodos(req, res){
    todo.find({})
    .then(function(data){
        res.status(200).json({success: true, data})
    })
    .catch(function(error){
        res.status(401).json ({success: false, message: 'Not created '+error.message});
    })
     
 }
 

 module.exports = {
    insertTodo,updateTodoById,deleteTodoById,getTodoById,getAllTodos
 }