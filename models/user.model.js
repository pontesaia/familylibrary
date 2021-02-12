const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		_id: { type: String, required: true },
		name: { type: String, required: true },
		givenName: { type: String, required: true },
		familyName: { type: String, required: true },
		avatar: { type: String, required: true },
		// stories: { type: [], required: false }
		// email: { type: String, required: true },
		// password: { type: String, required: true },
		// confirm_password: { type: String, required: true },
		// familyId: { type: String, required: false },
		// familyEmail: { type: String, required: false },
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
