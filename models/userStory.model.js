const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userStorySchema = new Schema(
	{
		title: { type: String, required: true },
		author: { type: String, required: false },
		avatar: { type: String, required: false },
		story: { type: String, required: true },
		category: { type: String, required: false },
		tags: { type: String, required: false },
	},
	{ timestamps: true }
);

const UserStory = mongoose.model("UserStory", userStorySchema);

module.exports = UserStory;
