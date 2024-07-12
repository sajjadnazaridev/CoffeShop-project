const http = require("http")
const express = require('express')
const app = express()
const fs = require("fs")
const {callback} = require("./models/userModel");
const userController = require("./controllers/userController");


app.get('/api/user', userController.getAllUsers)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


