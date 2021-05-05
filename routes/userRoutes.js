const router = require("express").Router();
const userController = require("../controllers/userController.js");

router
	.route("/")
	.get(userController.findAll)
	.post(userController.create)
	.delete(userController.removeAll);

router
	.route("/:id")
	.get(userController.findById)
	.put(userController.update)
	.delete(userController.remove);

	router.route("/email/:email").get(userController.findByEmail);
	router.route("/email/:email").put(userController.updateByEmail);

module.exports = router;
