import express from 'express';
import userRoutes from './user.routes.js';
import requestRoutes from './request.routes.js';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/request', requestRoutes);

export default router;