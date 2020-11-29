const router = require("express").Router();
const userStoriesController = require("../controllers/userStoriesController.js");

router
	.route("/")
	.get(userStoriesController.findAll)
	.post(userStoriesController.create)
	.delete (userStoriesController.removeAll);

router
	.route("/:id")
	.get(userStoriesController.findById)
	.put(userStoriesController.update)
	.delete(userStoriesController.remove);

module.exports = router;
