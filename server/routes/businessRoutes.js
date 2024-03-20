import express from 'express';
import Ad from '../models/ad.js';
import { authenticateToken } from '../middleware/authenticateToken.js';
import { submitAd } from '../controller/controller.js';

const router = express.Router();

router.post('/submit-ad', authenticateToken, submitAd);

export default router;
