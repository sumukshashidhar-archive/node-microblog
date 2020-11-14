const logger = require("./../config/logger")
const pms = require("./../controllers/posts_microservice")
module.exports = function (app) {
    app.get('/api/getAllPosts', async function(req, res) {
        pms.getAllPosts()
    })
}