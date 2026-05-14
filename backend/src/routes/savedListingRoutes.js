import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  addSavedListing,
  getSavedListings,
  removeSavedListing
} from '../controllers/savedListingController.js';

const router = express.Router();
router.post('/:listingId', protect, addSavedListing);
router.get('/', protect, getSavedListings);
router.delete('/:listingId', protect, removeSavedListing);

export default router;
