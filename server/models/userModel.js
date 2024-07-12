const {dbConnection} = require('../config/dbConnection')


function getAllUsers(callback) {
    dbConnection.query('SELECT * FROM `users`' , (err, result) => {
        if (err){
            console.error(err)
            callback(err,null)
            return
        }
        else callback(result,null)
    })
}


function getUserById (id , callback){
    dbConnection.query('SELECT * FROM `users` WHERE id = ? ' ,[id] , (err, result) => {
        if (err){
            console.error(err)
            callback(err, null)
            return
        }

        callback(result, null)
    })

}


module.exports = {
    getAllUsers,
    getUserById
}
