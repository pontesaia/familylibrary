const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		fullName: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		confirm_password: { type: String, required: true },
		familyId: { type: String, required: false },
		familyEmail: {type: String, required: false}
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
