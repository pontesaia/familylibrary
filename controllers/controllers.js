module.exports = {
	saySomething: (req, res, next) => {
		res.status(200).json({
			body: "Hello from the server!",
		});
	},
	
};