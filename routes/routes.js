const express = require("express");
const router = express.Router();
const controllers = require("./../controllers/controllers");

router.route("/say-something")
    .get(controllers.saySomething);

module.exports = router;
