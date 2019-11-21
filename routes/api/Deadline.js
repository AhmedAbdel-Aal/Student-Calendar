const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
const Deadline = require('../../models/Deadline')
const validator = require('../../validations/DeadlineValidations')

module.exports = router