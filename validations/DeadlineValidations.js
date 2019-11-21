const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().required(),
            type: Joi.string().required(),
            courseName: Joi.string().required(),
            deadline: Joi.date(),
            professorName: Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            deadline: Joi.date()
        }

        return Joi.validate(request, updateSchema)
    }
}