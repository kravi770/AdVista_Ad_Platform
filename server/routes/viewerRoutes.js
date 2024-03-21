import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken.js';
import { getAds } from '../controller/controller.js';

const router = express.Router();

router.get('/targeted-ads',authenticateToken,getAds);

export default router;