const express = require('express')
const router = express.Router();
const path = require('path')
const userController = require('../controllers/userController')



router.get('/' , userController.getAllUsers)
router.get('/:id' , userController.getUserById)
router.post('/add' , userController.addUser)
router.delete('/:id' , userController.deleteUser)


module.exports = router;