import mongoose from 'mongoose';

const savedListingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('SavedListing', savedListingSchema);
