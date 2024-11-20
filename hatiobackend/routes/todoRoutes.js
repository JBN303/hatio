
const express = require('express');
const Todo = require('../models/todoModel');

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const todo = new Todo({
      description: req.body.description,
      projectId: req.body.projectId,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).send('Error creating todo');
  }
});


router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).send('Todo not found');
    }
    todo.description = req.body.description || todo.description;
    todo.status = req.body.status || todo.status;
    todo.updatedDate = Date.now();
    await todo.save();
    res.send('Todo updated successfully');
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).send('Error updating todo');
  }
});

module.exports = router;
