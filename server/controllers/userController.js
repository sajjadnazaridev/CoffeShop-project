const userModel = require("../models/userModel")

function getAllUsers (req,res){
    userModel.getAllUsers((err, users) => {
        if (err){return res.status(500).json(err)}
        else res.status(500).json(users)
    })
}


function getUserById  (res, req){
    userModel.getUserById ((err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    })
}


module.exports = {
    getAllUsers,
    getUserById
}

