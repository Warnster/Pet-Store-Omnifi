import express from 'express';

import {
    getPets,
    createPet,
    getPet,
    updatePet,
    deletePet,
} from '../controllers/pet_controller.js';

const router = express.Router();
router.get('/:id', getPet);
router.get('', getPets);
router.post('', createPet);
router.put('/:id', updatePet);
router.delete('/:id', deletePet);

export default router;
