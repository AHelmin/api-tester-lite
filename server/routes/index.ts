

import { Router } from 'express';
import apiRoutes from './api/user.routes.ts';

const router = Router();

router.use('/api', apiRoutes);

export default router;