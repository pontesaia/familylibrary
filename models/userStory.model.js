const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userStorySchema = new Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	story: { type: String, required: true },
});

const UserStory = mongoose.model("UserStory", userStorySchema);

module.exports = UserStory;
