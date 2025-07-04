import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Fixed import name
import connectDB from './config/db.js';
import mongoose from 'mongoose'; // Added mongoose import
import taskRoutes from './routes/tasks.js'; // Changed to taskRoutes

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
connectDB();

// Middleware
app.use(cors()); // Fixed middleware
app.use(express.json());

// API Routes
app.use('/api/tasks', taskRoutes); // Changed to taskRoutes

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start server only after DB connection is ready
mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Fixed template string
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`); // Fixed template string
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`); // Fixed template string
  // Graceful shutdown
  server.close(() => process.exit(1));
});