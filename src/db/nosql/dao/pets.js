import PetModel from '../models/pet_schema.js';

export const getPetById = async(petID) => {
    return PetModel.findById(petID);
}

export const getPets = async(filters, offset, limit) => {
    const rows = await PetModel.find({
        ...filters,
    }).skip(offset).limit(limit);
    const count = await PetModel.find({
        ...filters,
    }).count();
    return {rows, count};
}

export const createPet = async(petData)  => {
    let pet = new PetModel();
    pet.firstName = petData.firstName;
    pet.weight = petData.weight;
    pet.price = petData.price;
    pet.species = petData.species;
    pet.isDeleted = 0;
    return pet.save();
}

export const updatePet = async(petID, petData) => {
    let pet = await PetModel.findById(petID);
    pet.firstName = petData.firstName;
    pet.weight = petData.weight;
    pet.price = petData.price;
    pet.species = petData.species;
    return pet.update()
}

export const deletePet = async(petID) => {
    let pet = await PetModel.findById(petID);
    pet.isDeleted = 1;
    return pet.update()
}
