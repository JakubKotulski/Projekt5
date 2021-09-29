const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;