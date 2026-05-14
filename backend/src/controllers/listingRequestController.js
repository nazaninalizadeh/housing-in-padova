import ListingRequest from '../models/ListingRequest.js';

export const createListingRequest = async (req, res) => {
  try {
    const images = (req.files || []).map(f => '/uploads/' + f.filename);
    const reqDoc = await ListingRequest.create({ user: req.user._id, data: req.body, images });
    res.json(reqDoc);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getAdminListingRequests = async (req, res) => {
  try { const list = await ListingRequest.find().populate('user'); res.json(list); } catch (err) { res.status(500).json({ message: err.message }); }
};

export const approveListingRequest = async (req, res) => {
  try { const r = await ListingRequest.findById(req.params.id); r.status = 'approved'; await r.save(); res.json(r); } catch (err) { res.status(500).json({ message: err.message }); }
};

export const rejectListingRequest = async (req, res) => {
  try { const r = await ListingRequest.findById(req.params.id); r.status = 'rejected'; await r.save(); res.json(r); } catch (err) { res.status(500).json({ message: err.message }); }
};
