const userModel = require("../models/userModel")
const {result} = require("lodash/object");


function getAllUsers(req, res) {
    userModel.getAllUsers((err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(user);
    });
}


function getUserById(req, res) {
    const userId = req.params.id
    userModel.getUserById(userId, (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user)
    });
}

function addUser (req, res) {
    const { userName, fullName, email, phoneNumber, gender, permission } = req.body;

    if (!userName || !fullName || !email || !phoneNumber || !gender || !permission) {
        return res.status(400).send({ error: 'fill all fields ' });
    }

    userModel.addUser({userName, fullName, email, phoneNumber, gender, permission},(err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).send(user);
    });
}


function deleteUser (req , res){
    const deleteUserId = req.params.id
    userModel.deleteUser(deleteUserId , (err , user) => {
        if (err){
            return res.status(404).json({error : 'Server Error'});
        }
        else if (!user){
            return res.status(400).send({error : 'User not found'})
        }
        else {
            res.send( 'User successfuly deleated')
        }

    })
}







module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser
}

