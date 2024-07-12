const express = require('express')
const router = express.Router();
const path = require('path')
const userController = require('../controllers/userContoroller')
const bodyParser = require('body-parser');


router.get('/', userController.getAllUsers)
// router.get('/:id', userController.getUserById)


module.exports = router;