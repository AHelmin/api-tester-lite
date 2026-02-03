import mongoose from 'mongoose';

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb//localhost:27017/apitesterdb');
        console.log(`MongoDB Connected: ${mongoose.connection.name}`);
    } catch(err) {
        console.error('Connection error: ', err.message);
        process.exit(1);
    }
};