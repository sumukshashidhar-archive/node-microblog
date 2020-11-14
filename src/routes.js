module.exports = function(app) {
    require("./routes/core")(app); // core routes, such as alive or not.
    require("./routes/auth")(app); // authentication routes
    require("./routes/dashboard")(app); // dashboard routes
    require("./routes/data-vault")(app); // vault
    require("./routes/api")(app);
    require("./routes/frontend")(app);

}