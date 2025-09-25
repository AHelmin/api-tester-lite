import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    queryHistory: string[];
}

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required.'],
        trim: true,
        lowercase: true,
        match: [/^[a-z0-9._-]+@[\da-z.-]+\.[a-z.]{2,6}$/i, 'Email is invalid.'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128,
        trim: true,
        select: false,
    },
    queryHistory: {
        type: [String],
        default: [],
    }, 
    
}, {
    timestamps: true,
}
)

const User = mongoose.model<IUser>('User', userSchema)
export default User;