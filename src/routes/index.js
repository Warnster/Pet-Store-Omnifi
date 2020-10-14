import express from 'express';
import petRoutes from './pet_routes.js';
const router = express.Router();
router.use('/pet', petRoutes);

export default router;
