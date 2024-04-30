const asyncHandler = require('express-async-handler');
const Task = require('../models/taskModel');
const {createCustomError} = require('../errors/customError');

const getAllTasks = asyncHandler(async (req,res) => {
    const tasks = await Task.find({});
    if (!tasks) throw new Error('no tasks error');
    res.status(200).json({tasks});
});

const createTask = asyncHandler(async (req,res,next) => {
    const {name} = req.body;
    if (!name) throw new Error('no name error');
    const task = await Task.create(req.body);
    res.status(201).json({task});
});

const getTask = asyncHandler(async (req,res,next) => {
    const task = await Task.findOne({_id: req.params.id});
    if (!task) {
       return next(createCustomError('no task found', 404));
    }
    res.status(200).json({task});   
});

const updateTask = asyncHandler(async(req,res) => {
    const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true, // to return the updated task
        runValidators: true // to enfore model validators
    });
    if (!task) {
        return next(createCustomError('no task found', 404));
    }
    res.status(200).json({task});
});

const deleteTask = asyncHandler(async (req,res) => {
    const task = await Task.findOneAndDelete({_id: req.params.id});
    if (!task) {
        return next(createCustomError('no task found', 404));
    }
    res.status(200).json({task});
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}