const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },

    day: {
        type: String,
        required: true
    },

    reminder: {
        type: Boolean,
        require:true
    }
})

module.exports = mongoose.model('Task', taskSchema)