import * as petService from '../services/pet_service.js';
import {ApiResponse, ApiResponseStatus} from '../util/api_response.js'
import { petCreateUpdateSchema } from '../validation_schemas/pet_validation_schema.js';

export const getPet = async (req, res) => {
    const petID = req.params.id;

    try {
        //Todo implement call to get data
        
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
    
    try {
        await petCreateUpdateSchema.validateAsync(petData);
    } catch (err) {
        const errMsg = `Invalid request: ${err.message}`;
        console.warn(errMsg, err);
        return res.status(400).json(new ApiResponse({
            status: ApiResponse.FAIL,
            errors: [errMsg],
            message: 'validation error'
        }));
    }

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

        const {rows, count} = await petService.getPets(filters, offset, limit);

        return res.status(200).json(new ApiResponse({
            data: rows,
            totalFilteredRows: count,
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

export const updatePet = async (req, res) => {
    const petID = req.params.id;
    const petData = req.bodhy;

    try {
        await petCreateUpdateSchema.validateAsync(petData);
    } catch (err) {
        const errMsg = `Invalid request: ${err.message}`;
        console.warn(errMsg, err);
        return res.status(400).json(new ApiResponse({
            status: ApiResponse.FAIL,
            errors: [errMsg],
            message: 'validation error'
        }));
    }
    try {

        const data = await petService.updatePet(petID,petData);

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

export const deletePet = async (req, res) => {
    const petID = req.params.id;
    //add validation
    try {

        const data = await petService.deletePet(petID);

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