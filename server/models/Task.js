import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Task is required'],
    trim: true,
    maxlength: [100, 'Task cannot exceed 100 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

export default Task;