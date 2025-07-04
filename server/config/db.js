import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Using environment variable for security
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Event listeners for connection monitoring
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to DB');
    });
    
    mongoose.connection.on('error', (err) => {
      console.error(`Mongoose connection error: ${err.message}`);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected');
    });
    
    return conn;
  } catch (error) {
    console.error(`Connection Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Graceful shutdown
const shutdownDB = async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
};

// Handle app termination
process.on('SIGINT', shutdownDB);
process.on('SIGTERM', shutdownDB);

export default connectDB;