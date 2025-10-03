import mongoose from 'mongoose';

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/api-tester-lite');
        console.log('MongoDB connected!')
    } catch (err) {
        console.error('MongoDB connection error:', err)
        process.exit(1);
    }
}

export default connectDB;