const ams = require("./../controllers/auth_microservice")
module.exports = function (app) {
    app.post('/login', function (req, res) {
        let response = ams.login(req.body.username, req.body.password)
        if(response){

        }
    })
}