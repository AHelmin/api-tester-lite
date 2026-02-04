import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  method: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: false,
    default: null,
  },
  userId: {
    type: mongoose.ObjectId,
    ref: 'User',
  }
},{
    timestamps: true
}
);

export const Request = mongoose.model('Request', requestSchema);