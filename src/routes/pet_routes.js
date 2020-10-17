import express from 'express';

import {
    getPets,
    createPet,
    getPet,
} from '../controllers/pet_controller.js';

const router = express.Router();
router.get('/:id', getPet);
router.get('', getPets);
router.post('', createPet);

export default router;
