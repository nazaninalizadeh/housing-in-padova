import express from 'express';
import {
  getListings,
  getListingById,
  adminCreateListing,
  adminUpdateListing,
  adminDeleteListing
} from '../controllers/listingController.js';
import { protect, adminOnly } from '../middleware/auth.js';
import upload from '../config/upload.js';

const router = express.Router();
router.get('/', getListings);
router.get('/:id', getListingById);
router.post('/admin', protect, adminOnly, upload.array('photos', 8), adminCreateListing);
router.put('/admin/:id', protect, adminOnly, upload.array('photos', 8), adminUpdateListing);
router.delete('/admin/:id', protect, adminOnly, adminDeleteListing);

export default router;
