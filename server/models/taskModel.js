const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Add task name"],
        trim: true,
        maxlength: [20, "name canno't be more than 20 characters"]
    },
    isCompleted:{
        type: Boolean,
        default: false
    },
},
    {
    timestamps: true  
});

module.exports = mongoose.model('Task', taskSchema);