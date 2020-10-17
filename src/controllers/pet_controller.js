import * as petService from '../services/pet_service.js';
import {ApiResponse, ApiResponseStatus} from '../util/api_response.js'

export const getPet = async (req, res) => {
    const petID = req.params.id;

    try {
        //Todo implement call to get data
        /*const data = {
            petID,
            firstName: 'Timmy',
            nickNames: ['Tim', 'Mr T'],
            dateOfBirth: new Date(),
            species: 'dog',
            breed: 'dalmation',
            weight: '3st',
            price: 23.49
        }*/
        const data = await petService.getPet(petID);

        return res.status(200).json(new ApiResponse({
            data,
            status: ApiResponseStatus.SUCCESS,
            message: 'getPet success'
        }));
    } catch (err) {
        console.error(err, { err, req });
        return res.status(500).json(new ApiResponse({
            status: ApiResponseStatus.FAIL,
            errors: [err],
            message: err
        }));
    }
}

export const createPet = async (req, res) => {
    const petData = req.body;
    //toto: add validation
    try {
        
        const data = await petService.createPet(petData);

        return res.status(200).json(new ApiResponse({
            data,
            status: ApiResponseStatus.SUCCESS,
            message: 'createPet success'
        }));
    } catch (err) {
        console.error(err, { err, req });
        return res.status(500).json(new ApiResponse({
            status: ApiResponseStatus.FAIL,
            errors: [err],
            message: err
        }));
    }
}

export const getPets = async (req, res) => {
    const filters = req.query;
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit);
    delete filters.limit;
    delete filters.offset;
    //todo add filter validation
    try {

        const data = await petService.getPets(filters, offset, limit);

        return res.status(200).json(new ApiResponse({
            data,
            status: ApiResponseStatus.SUCCESS,
            message: 'getPet success'
        }));
    } catch (err) {
        console.error(err, { err, req });
        return res.status(500).json(new ApiResponse({
            status: ApiResponseStatus.FAIL,
            errors: [err],
            message: err
        }));
    }
}