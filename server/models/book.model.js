import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  isbn: {
    type: String
  },
  uid: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: String
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