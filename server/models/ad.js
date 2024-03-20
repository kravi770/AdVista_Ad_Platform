import mongoose from 'mongoose';

const adSchema = new mongoose.Schema({
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
