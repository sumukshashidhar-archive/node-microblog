const ams = require("./../controllers/auth_microservice")
module.exports = function (app) {
    app.post('/login', function (req, res) {
        let response = ams.login(req.body.username, req.body.password)
        if(response!==false){
            res.cookie('access_token', response, {expires: new Date(Date.now() + 24 * 60 * 60 * 1000)})
            res.redirect('/dash')
        }
        else {
            res.status(403).json({
                "message":"failed auth"
            })
        }
    })
}