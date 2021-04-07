const Task = require('../models/Task')

// get all tasks
exports.fetchAll = async(req, res)  => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        console.log(error)
    }
}

// create task
exports.create = async(req, res) => {
    try {
        const newTask = new Task({
            text: req.body.text,
            day: req.body.day,
            reminder: req.body.reminder
        })

        const task = await newTask.save()
        res.json(task)
    } catch (error) {
        console.log(error)
    }
}

// delete task
exports.delete = ('/:id', async(req, res) => {
    try {
        const task = await Task.findById(req.params.id)

        if(task) {
            await task.delete()
            res.json({msg: "Task deleted"});
        }
        else {
            res.status(400).json ({ msg: 'Task not found' })
        }
    } catch (error) {
        console.log(error)
    }
})