// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const api = require("./routes/routes");
const userStoriesRouter = require("./routes/userStories");
const dotenv = require("dotenv");
// require("./database");

dotenv.config();

// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
	console.log(`Request_Endpoint: ${req.method} ${req.url}`);
	next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

// Configure the CORs middleware
app.use(cors());

// Configure app to use routes
app.use("/api/v1/", api);
app.use("/userStories", userStoriesRouter);

// This middleware informs the express application to serve our compiled React files
if (
	process.env.NODE_ENV === "production" ||
	process.env.NODE_ENV === "staging"
) {
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

// Catch any bad requests
app.get("*", (req, res) => {
	res.status(200).json({
		msg: "Catch All",
	});
});

mongoose.connect(process.env.REACT_APP_MONGODB_URI);

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
