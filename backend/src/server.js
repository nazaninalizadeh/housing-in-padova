import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import listingRoutes from './routes/listingRoutes.js';
import savedListingRoutes from './routes/savedListingRoutes.js';
import savedSearchRoutes from './routes/savedSearchRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import listingRequestRoutes from './routes/listingRequestRoutes.js';
import evaluationRequestRoutes from './routes/evaluationRequestRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());
app.use('/uploads', express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), '../uploads')));

// Connect DB
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/saved-listings', savedListingRoutes);
app.use('/api/saved-searches', savedSearchRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/listing-requests', listingRequestRoutes);
app.use('/api/evaluation-requests', evaluationRequestRoutes);

app.get('/', (req, res) => res.send('Housing In Padova API'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
