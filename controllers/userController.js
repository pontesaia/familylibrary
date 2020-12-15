let User = require("../models/user.model");

module.exports = {
	findAll: function (req, res) {
		User.find(req.query)
			.then((user) => res.json(user))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		User.findById(req.params.id)
			.then((user) => res.json(user))
			.catch((err) => res.status(422).json(err));
	},
	create: function (req, res) {
		User.create(req.body)
			.then((user) => res.json(user))
			.catch((err) => res.status(422).json(err));
	},
	update: function (req, res) {
		User.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((user) => res.json(user))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		User.findById({ _id: req.params.id })
			.then((user) => user.remove())
			.then((user) => res.json(user))
			.catch((err) => res.status(422).json(err));
	},
	removeAll: function (req, res) {
		User.deleteMany({}, function (err) {
			if (err) {
				res.status(500).send({ error: "Could not clean database..." });
			} else {
				res.status(200).send({
					message: "All info was deleted succesfully...",
				});
			}
		});
	},
};
