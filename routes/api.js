var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var todoSchema = mongoose.Schema({
	title : String,
	text : String
});

var todo = mongoose.model('Todo', todoSchema, 'todo');

/* GET todo list. */
router.get('/todos', function(req, res) {
  todo.find(function(err, todos){
	if (err) res.send('Error');
	res.send(todos);
  });	
});

/* GET todo by id. */
router.get('/todo/:_id', function(req, res) {
  todo.findOne({_id: req.params._id}, function(err, todo){
	if (err) res.send('Error');
	res.send(todo);
  });	
});

/* POST  create todo. */
router.post('/todo', function(req, res) {
  console.log(req.body.title);
  console.log(req.body.text);
  
  
  todo.create({title : req.body.title, text : req.body.text}, function(err, t){
	if (err) res.send('Error');
	//res.send(todo);
	
	todo.find(function(err, todos){
	  if (err) res.send('Error');
	  console.log(todos);
	  res.send(todos);
	});
	
  });
	
  //res.send('Success');
});


/* PUT  update todo. */
router.put('/todo/:_id', function(req, res) {
  /*
  todo.findOne({_id: req.params._id}, function(err, todo){
	if (err) res.send('Error');
	res.send(todo);
  });
	*/
  res.send('Success');
});

/* DEL  delete todo. */
router.delete('/todo/:_id', function(req, res) {
  
  todo.remove({_id: req.params._id}, function(err){
	if (err) res.send('Error');
	
	todo.find(function(err, todos){
	  if (err) res.send('Error');
	  console.log(todos);
	  res.send(todos);
	});
	
	//res.send('Success');
  });
  
	
  //res.send('Success');
});

module.exports = router;
