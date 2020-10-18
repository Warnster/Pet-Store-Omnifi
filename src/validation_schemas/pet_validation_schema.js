import Joi from '@hapi/joi';


export const petCreateUpdateSchema = Joi.object({

    firstName: Joi.string()
    .min(2)
    .max(120)

    ,weight: Joi.number()

    ,price: Joi.number()

    ,species: Joi.string()

});
