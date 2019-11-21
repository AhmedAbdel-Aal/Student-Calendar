const Joi = require('joi')

module.exports = {
    CreateValidation: request => {
        const CreateSchema = {
            Name: Joi.string().required(),
            Type: Joi.string().required(),
            CourseName: Joi.string().required(),
            Deadline: Joi.date().required().greater(Date.now()),
            ProfessorName: Joi.string().required()
        }

        return Joi.validate(request, CreateSchema)
    },

    UpdateValidation: request => {
        const UpdateSchema = {
            Deadline: Joi.date().required().greater(Date.now())
        }

        return Joi.validate(request, UpdateSchema)
    }
}