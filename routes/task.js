const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.get('/tasks', taskController.fetchAll)

router.post('/addTask', taskController.create)

router.delete('/deleteTask/:id', taskController.delete)

module.exports = router