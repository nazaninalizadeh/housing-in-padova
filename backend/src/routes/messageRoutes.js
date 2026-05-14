import express from 'express';
import { protect, adminOnly } from '../middleware/auth.js';
import { sendMessage, getUserMessages, getAdminMessages, replyToMessage } from '../controllers/messageController.js';

const router = express.Router();
router.post('/', protect, sendMessage);
router.get('/user', protect, getUserMessages);
router.get('/admin', protect, adminOnly, getAdminMessages);
router.post('/admin/reply/:messageId', protect, adminOnly, replyToMessage);

export default router;
