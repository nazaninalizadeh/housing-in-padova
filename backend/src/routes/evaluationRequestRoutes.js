import express from 'express';
import { 
  createEvaluationRequest, 
  getAdminEvaluationRequests, 
  updateEvaluationRequest 
} from '../controllers/evaluationRequestController.js';
import { protect, adminOnly } from '../middleware/auth.js';
import upload from '../config/upload.js';

const router = express.Router();

router.post('/', protect, upload.array('images', 5), createEvaluationRequest);
router.get('/admin', protect, adminOnly, getAdminEvaluationRequests);
router.put('/admin/:id', protect, adminOnly, updateEvaluationRequest);

export default router;
