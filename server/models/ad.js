import mongoose from 'mongoose';

const adSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  target1: {
    type: String,
    required: true,
  },
  target2: {
    type: String,
    required: true,
  },
  target3: {
    type: String,
    required: true,
  },
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Ad', adSchema);
