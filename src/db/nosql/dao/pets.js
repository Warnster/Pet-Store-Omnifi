import PetModel from '../models/pet_schema.js';

export const getPetById = async(petID) => {
    return PetModel.findById(petID);
}

export const getPets = async(filters, offset, limit) => {
    return PetModel.find({
        ...filters,
    }).skip(offset).limit(limit);
}

export const createPet = async(petData)  => {
    let pet = new PetModel();
    pet.firstName = petData.firstName;
    pet.weight = petData.weight;
    pet.price = petData.price;
    pet.species = petData.species;
    return pet.save();
}
