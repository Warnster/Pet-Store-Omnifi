import {ApiResponse, ApiResponseStatus} from '../util/api_response.js'

export const getPet = async (req, res) => {
    const petID = req.params.id;

    try {
        //Todo implement call to get data
        const data = {
            petID,
            firstName: 'Timmy',
            nickNames: ['Tim', 'Mr T'],
            dateOfBirth: new Date(),
            species: 'dog',
            breed: 'dalmation',
            weight: '3st',
            price: 23.49
        }
        

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