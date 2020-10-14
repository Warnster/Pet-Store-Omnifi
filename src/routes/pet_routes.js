import express from 'express';

import {
    getPet,
} from '../controllers/pet_controller.js';

const router = express.Router();
router.get('/:id', getPet);

export default router;
