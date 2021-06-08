import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Input,
} from "reactstrap";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: {},
			errors: {},
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let input = this.state.input;
		input[event.target.name] = event.target.value;

		this.setState({
			input,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		window.location = "/Feed";
		// if (this.validate()) {
		// 	console.log(this.state);

		// 	let input = {};
		// 	input["username"] = "";
		// 	input["email"] = "";
		// 	input["password"] = "";
		// 	input["confirm_password"] = "";
		// 	this.setState({ input: input });

		// 	alert("Register Form is submitted");
		// }
	}

	validate() {
		let input = this.state.input;
		let errors = {};
		let isValid = true;

		if (!input["username"]) {
			isValid = false;
			errors["username"] = "Please enter your username.";
		}

		if (typeof input["username"] !== "undefined") {
			const re = /^\S*$/;
			if (input["username"].length < 6 || !re.test(input["username"])) {
				isValid = false;
				errors["username"] = "Please enter valid username.";
			}
		}

		if (!input["email"]) {
			isValid = false;
			errors["email"] = "Please enter your email Address.";
		}

		if (typeof input["email"] !== "undefined") {
			var pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!pattern.test(input["email"])) {
				isValid = false;
				errors["email"] = "Please enter valid email address.";
			}
		}

		if (!input["password"]) {
			isValid = false;
			errors["password"] = "Please enter your password.";
		}

		if (!input["confirm_password"]) {
			isValid = false;
			errors["confirm_password"] = "Please enter your confirm password.";
		}

		if (typeof input["password"] !== "undefined") {
			if (input["password"].length < 6) {
				isValid = false;
				errors["password"] = "Please add at least 6 characters.";
			}
		}

		if (
			typeof input["password"] !== "undefined" &&
			typeof input["confirm_password"] !== "undefined"
		) {
			if (input["password"] !== input["confirm_password"]) {
				isValid = false;
				errors["password"] = "Passwords don't match.";
			}
		}

		this.setState({
			errors: errors,
		});

		return isValid;
	}
	render() {
		return (
			<React.Fragment>
				<div className="componentContainer">
					<Container>
						<Row className="text-left mt-4">
							<Col xs="12" sm="12" md="7" className="mx-auto">
								<Row>
									<Col className="text-left mt-4">
										<h1 style={styles.header}>
											<Button
												name="registerCollapsed"
												onClick={
													this.props.toggleComponent
												}
												style={styles.backLink}
											>
												↩
											</Button>
										</h1>
									</Col>
								</Row>
								<Row>
									<Col className="text-left mt-2 mb-4">
										<h1 style={styles.header}>Register</h1>
									</Col>
								</Row>
								<Form onSubmit={this.handleSubmit}>
									<FormGroup>
										<Input
											type="text"
											name="username"
											value={this.state.input.username}
											onChange={this.handleChange}
											className="form-control"
											placeholder="Enter your username"
											id="username"
										/>

										<div className="text-danger">
											{this.state.errors.username}
										</div>
									</FormGroup>
									<FormGroup>
										<Input
											type="text"
											name="email"
											value={this.state.input.email}
											onChange={this.handleChange}
											className="form-control"
											placeholder="Enter your email"
											id="email"
										/>

										<div className="text-danger">
											{this.state.errors.email}
										</div>
									</FormGroup>
									<FormGroup>
										<Input
											type="password"
											name="password"
											value={this.state.input.password}
											onChange={this.handleChange}
											className="form-control"
											placeholder="Enter your password"
											id="password"
										/>

										<div className="text-danger">
											{this.state.errors.password}
										</div>
									</FormGroup>
									<FormGroup>
										<Input
											type="password"
											name="confirm_password"
											value={
												this.state.input
													.confirm_password
											}
											onChange={this.handleChange}
											className="form-control"
											placeholder="Enter confirm password"
											id="confirm_password"
										/>

										<div className="text-danger">
											{this.state.errors.confirm_password}
										</div>
									</FormGroup>

									<Button
										type="submit"
										value="Submit"
										style={styles.sendBtn}
									>
										SEND
									</Button>
								</Form>
							</Col>
						</Row>
						<hr></hr>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
const styles = {
	header: {
		color: "black",
		fontSize: "1.2rem",
		// marginLeft: "1rem",
		fontFamily: "Comfortaa",
	},
	form1: {
		margin: "0 auto",
	},
	sendBtn: {
		float: "right",
		width: "100%",
		marginBottom: "80px",
		backgroundColor: "black",
		fontSize: "1.2rem",
	},
	backLink: {
		textDecoration: "none",
		color: "black",
		backgroundColor: "transparent",
		borderColor: "transparent",
	},
};

export default Register;
