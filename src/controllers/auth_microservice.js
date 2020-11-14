const user = require("./../models/user")
const logger = require("./../config/logger")
const bcrypt = require("bcrypt")
module.exports = {
    login: async function login(uname, password) {
        return new Promise(async function(resolve, reject) {
            user.findOne({username: username}, async function(err, obj) {
                if(err) {
                    logger.error(err)
                    reject(false)
                }
                else {
                    if(obj!==undefined && obj) {

                    }
                    else {
                        reject(false)
                    }
                }
            })
        })
    }
}