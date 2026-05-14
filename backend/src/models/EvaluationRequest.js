import mongoose from 'mongoose';

const evaluationRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  area: String,
  details: String,
  images: [String],
  status: { type: String, enum: ['pending','done','rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('EvaluationRequest', evaluationRequestSchema);
