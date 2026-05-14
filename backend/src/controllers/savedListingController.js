import SavedListing from '../models/SavedListing.js';

export const addSavedListing = async (req, res) => {
  const { listingId } = req.params;
  try {
    const exists = await SavedListing.findOne({ user: req.user._id, listing: listingId });
    if (exists) return res.status(400).json({ message: 'Already saved' });
    const saved = await SavedListing.create({ user: req.user._id, listing: listingId });
    res.json(saved);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getSavedListings = async (req, res) => {
  try {
    const items = await SavedListing.find({ user: req.user._id }).populate('listing');
    res.json(items);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const removeSavedListing = async (req, res) => {
  try {
    await SavedListing.findOneAndDelete({ user: req.user._id, listing: req.params.listingId });
    res.json({ message: 'Removed' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
