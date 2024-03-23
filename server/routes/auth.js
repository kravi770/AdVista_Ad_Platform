import express from 'express';
import { loginUser, signupUser } from '../controller/controller.js';

const router = express.Router();

//Login/Signup Route
router.post('/signup', signupUser);
router.post('/login', loginUser);

export default router;
