const router = require("express").Router();
const { get } = require("mongoose");
const familyGroupController = require("../controllers/familyGroupController.js");

router
	.route("/")
	.get(familyGroupController.findAll)
	.post(familyGroupController.create)
	.delete(familyGroupController.removeAll);

router
	.route("/:id")
	.get(familyGroupController.findById)
	.put(familyGroupController.update)
	.delete(familyGroupController.remove);

router.route("/groupAdmin/:email").get(familyGroupController.findByEmail);

module.exports = router;
