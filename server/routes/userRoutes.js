import express from 'express';
import { getUser } from '../controller/controller.js';
import { authenticateToken } from '../middleware/authenticateToken.js';

const router = express.Router();

router.get('/user', authenticateToken, getUser);
export default router;
