import Listing from '../models/Listing.js';

export const getListings = async (req, res) => {
  const q = req.query || {};
  try {
    const listings = await Listing.find({ published: true }).sort({ createdAt: -1 }).limit(50);
    res.json(listings);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Not found' });
    res.json(listing);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const adminCreateListing = async (req, res) => {
  try {
    const data = req.body;
    const photos = (req.files || []).map(f => '/uploads/' + f.filename);
    const listing = await Listing.create({ ...data, photos });
    res.json(listing);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const adminUpdateListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Not found' });
    Object.assign(listing, req.body);
    if (req.files && req.files.length) listing.photos = (req.files || []).map(f => '/uploads/' + f.filename);
    await listing.save();
    res.json(listing);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const adminDeleteListing = async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
