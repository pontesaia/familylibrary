const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familyGroupSchema = new Schema(
	{
		groupName: { type: String, required: true },
		groupAdmin: { type: Array, required: false },
		groupMembers: { type: Array, required: false },
		groupZip: { type: String, required: false },
	},
	{ timestamps: true }
);

const UserStory = mongoose.model("FamilyGroup", familyGroupSchema);

module.exports = UserStory;
