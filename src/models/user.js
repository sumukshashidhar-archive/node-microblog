const mongoose = require("mongoose");
const nanoid = require('nanoid')

const userSchema = new mongoose.Schema({
    user_id: {type: String, default: nanoid.nanoid()},
    username: String,
    password: String,
});

module.exports = mongoose.model("user", userSchema);