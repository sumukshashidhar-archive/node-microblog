const user = require("./../models/user")
const logger = require("./../config/logger")
const bcrypt = require("bcrypt")

async function checkPassword(password, attempt) {
    return new Promise(async function(resolve, reject) {
        bcrypt.compare(attempt, password, function (err, BCRYPT_RES) {
            if(err){
                logger.error(err)
            }
            else {
                resolve(BCRYPT_RES)
            }
        })
    })
}

async function hashPassword(password) {
    return new Promise(async function(resolve, reject) {

    })
}


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
                        const resp = await checkPassword(obj["password"],password)
                        if(resp) {
                            resolve(obj)
                        }
                    }
                    else {
                        reject(false)
                    }
                }
            })
        })
    }
}