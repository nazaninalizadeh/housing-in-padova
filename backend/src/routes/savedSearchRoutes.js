import express from 'express';
import { protect } from '../middleware/auth.js';
import { addSavedSearch, getSavedSearches, removeSavedSearch } from '../controllers/savedSearchController.js';

const router = express.Router();
router.post('/', protect, addSavedSearch);
router.get('/', protect, getSavedSearches);
router.delete('/:id', protect, removeSavedSearch);

export default router;
