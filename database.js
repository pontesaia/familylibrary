const mongoose = require("mongoose");
const connection = process.env.REACT_APP_MONGODB_URI;
mongoose
	.connect(connection, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log("Database Connected Successfully"))
	.catch((err) => console.log(err));
