const router = require("express").Router();
const userStoriesController = require("../controllers/userStoriesController.js");

router
	.route("/")
	.get(userStoriesController.findAll)
	.post(userStoriesController.create)
	.delete(userStoriesController.removeAll);

router
	.route("/:id")
	.get(userStoriesController.findAllUserId)
	.put(userStoriesController.update)
	.delete(userStoriesController.remove);

router.route("/userStory/:id").get(userStoriesController.findByStoryId);

module.exports = router;
