const logger = require("./../config/logger")
module.exports = function (app) {
    app.get("/", async function (req, res) {
        logger.debug("Hit the homepage");
        res.json({
            status: 200,
            message: "API service is online",
        });
    });
}