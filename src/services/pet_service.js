import * as petDAO from '../db/nosql/dao/pets.js';

export const createPet = async(petData) => {
    return petDAO.createPet(petData)
}

export const getPet = async(petID) => {
    return petDAO.getPetById(petID);
}

export const getPets = async(filters, offset, limit) => {
    return petDAO.getPets(filters, offset, limit);
}