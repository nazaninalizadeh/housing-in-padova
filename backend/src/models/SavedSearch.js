import mongoose from 'mongoose';

const savedSearchSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  query: { type: Object },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('SavedSearch', savedSearchSchema);
