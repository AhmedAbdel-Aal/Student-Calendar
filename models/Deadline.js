const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeadlineSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        enum: ['Task', 'Assignment', 'Project', 'Quiz', 'Midterm', 'Final'],
        required: true
    },
    CourseName : {
        type : String,
        required: true
    },
    Deadline: {
        type: Date,
        required: true
    },
    ProfessorName: {
        type: String,
        required: true
    }
})

module.exports = Deadline = mongoose.model('Deadline', DeadlineSchema)