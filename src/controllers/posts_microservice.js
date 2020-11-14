const logger = require("./../config/logger")
const post = require("./../models/post")
module.exports = {
    getRecentPosts: async function(user_id) {
        return new Promise(async function(resolve, reject) {
            post.find({user_id: user_id}, async function(err, obj) {
                if(err) {
                    logger.error("Failed to connect to mongodb")
                    reject(false)
                }
                else {
                    logger.debug(`Returning ${obj} for ${user_id}`)
                    resolve(obj)
                }
            })
        })
    }
}