import Joi from '@hapi/joi';


export const petCreateUpdateSchema = Joi.object({

    firstName: Joi.string()
    .min(2)
    .max(120)
    .required()

    ,weight: Joi.number().required()

    ,price: Joi.number().required()

    ,species: Joi.string().required()

    ,breed: Joi.string().required()

    ,nickNames: Joi.array()
        .items( Joi.string() ).required()

    ,dob: Joi.date().required()
});

export const petFilterSchema = Joi.object({
    firstName: Joi.string()
    .min(2)
    .max(120)

    ,weight: Joi.number()

    ,price: Joi.number()

    ,species: Joi.string()

    ,breed: Joi.string()

    ,nickNames: Joi.array()
        .items( Joi.string() )

    ,dob: Joi.date()

    ,isDeleted: Joi.boolean()
})