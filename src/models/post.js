const mongoose = require("mongoose");
const nanoid = require('nanoid')

const postSchema = new mongoose.Schema({
    post_id: {type: String, default: nanoid.nanoid()},
    user_id: String,
    post_title: String,
    post_time: {type: Date, default: Date.now()},
    post_text: String
});

module.exports = mongoose.model("post", postSchema);