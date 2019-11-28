const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deadlineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Task', 'Assignment', 'Project', 'Quiz', 'Midterm', 'Final','mini-Project','Milestone'],
        required: true
    },
    courseName : {
        type : String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    professorName: {
        type: String,
        required: true
    }
})

module.exports = deadline = mongoose.model('deadline', deadlineSchema)