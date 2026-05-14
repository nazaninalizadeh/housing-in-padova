import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  area: { type: String },
  address: { type: String },
  price: { type: Number },
  houseType: { type: String },
  roomType: { type: String },
  description: { type: String },
  features: [String],
  rules: [String],
  availableFrom: Date,
  photos: [String],
  media3D: [String],
  videoUrl: String,
  status: { type: String, enum: ['available','rented','hidden'], default: 'available' },
  published: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Listing', listingSchema);
