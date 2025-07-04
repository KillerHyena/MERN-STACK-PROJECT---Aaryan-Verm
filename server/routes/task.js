import express from 'express';
import Task from '../models/Task.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Create a new task (Authenticated)
router.post('/', auth, async (req, res) => {
  const { text } = req.body;
  
  try {
    const newTask = new Task({
      text,
      user: req.user.userId
    });
    
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (error) {
    console.error('Task creation error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all tasks for user (Authenticated)
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId });
    res.json(tasks);
  } catch (error) {
    console.error('Get tasks error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update task status (Authenticated)
router.patch('/:id/status', auth, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  try {
    const task = await Task.findOne({ _id: id, user: req.user.userId });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    task.status = status;
    await task.save();
    
    res.json(task);
  } catch (error) {
    console.error('Status update error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update task priority (Authenticated)
router.patch('/:id/priority', auth, async (req, res) => {
  const { id } = req.params;
  const { priority } = req.body;
  
  try {
    const task = await Task.findOne({ _id: id, user: req.user.userId });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    task.priority = priority;
    await task.save();
    
    res.json(task);
  } catch (error) {
    console.error('Priority update error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete task (Authenticated)
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  
  try {
    const task = await Task.findOneAndDelete({ _id: id, user: req.user.userId });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.json({ message: 'Task deleted' });
  } catch (error) {
    console.error('Delete task error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;