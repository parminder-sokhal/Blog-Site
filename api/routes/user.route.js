import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';
import { verifyUser } from '../utlis/verifyUser.js';

const router =express.Router();

router.get('/test', test);
router.put('/update/:userId',verifyUser, updateUser);

export default router; 