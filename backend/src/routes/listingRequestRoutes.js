import express from 'express';
import { protect, adminOnly } from '../middleware/auth.js';
import upload from '../config/upload.js';
import { createListingRequest, getAdminListingRequests, approveListingRequest, rejectListingRequest } from '../controllers/listingRequestController.js';

const router = express.Router();
router.post('/', protect, upload.array('images', 6), createListingRequest);
router.get('/admin', protect, adminOnly, getAdminListingRequests);
router.put('/admin/:id/approve', protect, adminOnly, approveListingRequest);
router.put('/admin/:id/reject', protect, adminOnly, rejectListingRequest);

export default router;
