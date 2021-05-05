let FamilyGroup = require("../models/familyGroup.model");

module.exports = {
	findAll: function (req, res) {
		FamilyGroup.find(req.query)
			.then((familyGroup) => res.json(familyGroup))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		FamilyGroup.findById(req.params.id)
			.then((familyGroup) => res.json(familyGroup))
			.catch((err) => res.status(422).json(err));
	},
	// findByEmail: function (req, res) {
	// 	// FamilyGroup.find({ groupAdmin: req.params.email })
	// 	FamilyGroup.find(req.query)
	// 		.then((familyGroup) => res.json(familyGroup))
	// 		.catch((err) => res.status(422).json(err));
	// },
	findByEmail: function (req, res) {
		FamilyGroup.find({ groupAdmin: req.params.email })
			// FamilyGroup.find(req.query)
			.then((familyGroup) => res.json(familyGroup))
			.catch((err) => res.status(422).json(err));
	},
	updateByEmail: function (req, res) {
		FamilyGroup.findOneAndUpdate(
			// { $push: { groupAdmin: req.params.email } },
			{ groupAdmin: req.params.email  },
			{$push: req.body}
		)
			.then((familyGroup) => res.json(familyGroup))
			.catch((err) => res.status(422).json(err));
	},
	create: function (req, res) {
		FamilyGroup.create(req.body)
			.then((familyGroup) => res.json(familyGroup))
			.catch((err) => res.status(422).json(err));
	},
	update: function (req, res) {
		FamilyGroup.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((familyGroup) => res.json(familyGroup))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		FamilyGroup.findById({ _id: req.params.id })
			.then((familyGroup) => familyGroup.remove())
			.then((familyGroup) => res.json(familyGroup))
			.catch((err) => res.status(422).json(err));
	},
	removeAll: function (req, res) {
		FamilyGroup.deleteMany({}, function (err) {
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
