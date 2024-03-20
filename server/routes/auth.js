import express from 'express';
import { loginUser, signupUser } from '../controller/controller.js';

const router = express.Router();
//Signup Route
router.post('/signup', signupUser);
//Login route
router.post('/login', loginUser);

export default router;
