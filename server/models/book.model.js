import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  active: {
    type: Boolean,
    default: true,
    required: true
  }
})

export default mongoose.model('Book', BookSchema)