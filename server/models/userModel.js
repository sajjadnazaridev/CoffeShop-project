const {dbConnection} = require('../config/dbConnection')
const {result} = require("lodash/object");


function getAllUsers(callback) {
    dbConnection.query(
        'SELECT * FROM `users`' ,
        callback
    )
}


function getUserById (id , callback){
    dbConnection.query(
        'SELECT * FROM `users` WHERE id = ? ',
        [id],
        callback
    )
}


function deleteUser (id , callback){
    dbConnection.query(
        'DELETE FROM users WHERE `users`.`id` = ?',
        [id],
        callback
    )
}


function addUser(userData, callback){
    dbConnection.query(
        'INSERT INTO `users` (`id`, `userName`, `fullName`, `email`, `phoneNumber`, `gender`, `permission`, `createdAt`) ' +
        'VALUES (NULL, ?, ?, ?, ?, ?, ?, current_timestamp())',
        [userData.userName, userData.fullName, userData.email, userData.phoneNumber, userData.gender, userData.permission],
        (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, { id: results.insertId, ...userData });
        }
    );
}


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser
}
