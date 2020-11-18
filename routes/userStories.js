const router = require("express").Router();
let UserStory = require("../models/userStory.model");

router.route("/").get((req, res) => {
	UserStory.find()
		.then((userStories) => res.json(userStories))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const title = req.body.title;
	const author = req.body.author;
	const story = req.body.story;

	const newUserStory = new UserStory({ title, author, story });

	newUserStory
		.save()
		.then(() => res.json("User story added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
