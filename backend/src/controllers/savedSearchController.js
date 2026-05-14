import SavedSearch from '../models/SavedSearch.js';

export const addSavedSearch = async (req, res) => {
  try {
    const saved = await SavedSearch.create({ user: req.user._id, query: req.body });
    res.json(saved);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
export const getSavedSearches = async (req, res) => {
  try {
    const items = await SavedSearch.find({ user: req.user._id });
    res.json(items);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
export const removeSavedSearch = async (req, res) => {
  try {
    await SavedSearch.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
