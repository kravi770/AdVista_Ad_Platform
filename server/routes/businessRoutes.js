import express from 'express';
import Ad from '../models/ad.js';
import { authenticateToken } from '../middleware/authenticateToken.js';
import {
  getAdById,
  getAdsByBusinessId,
  submitAd,
  updateAd,
} from '../controller/controller.js';

const router = express.Router();

router.post('/submit-ad', authenticateToken, submitAd);
router.get('/ads', authenticateToken, getAdsByBusinessId);
router.get('/ad/:id', authenticateToken, getAdById);
router.put('/ad/:id', authenticateToken, updateAd);

export default router;
