const mongoose = require("mongoose");
import { nanoid } from 'nanoid'

const userSchema = new mongoose.Schema({
    user_id: {type: String, default: nanoid()},
    username: String,
    password: String,
});

module.exports = mongoose.model("user", userSchema);