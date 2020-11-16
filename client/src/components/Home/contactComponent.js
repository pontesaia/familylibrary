import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	Label,
	FormGroup,
	Input,
	Form,
	Button,
} from "reactstrap";

class Contact extends Component {
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

		if (this.validate()) {
			console.log(this.state);

			let input = {};

			input["email"] = "";
			input["title"] = "";
			input["message"] = "";
			this.setState({ input: input });

			alert("Contact Form is submitted");
		}
	}

	validate() {
		let input = this.state.input;
		let errors = {};
		let isValid = true;

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

		if (!input["title"]) {
			isValid = false;
			errors["title"] = "Please enter your subject title.";
		}

		if (!input["message"]) {
			isValid = false;
			errors["message"] = "Please enter your message.";
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
									<Col className="text-left mt-2 mb-4">
										<h1 style={styles.header}>Contact</h1>
									</Col>
								</Row>
								<Form style={styles.form1}>
									<FormGroup>
										<Input
											type="text"
											name="email"
											value={this.state.input.email}
											onChange={this.handleChange}
											class="form-control"
											placeholder="Enter your email"
											id="email"
										/>
										<div className="text-danger">
											{this.state.errors.email}
										</div>
									</FormGroup>
									<FormGroup>
										<Input
											type="text"
											name="title"
											value={this.state.input.title}
											onChange={this.handleChange}
											class="form-control"
											placeholder="Enter your subject title"
											id="title"
										/>
										<div className="text-danger">
											{this.state.errors.title}
										</div>
									</FormGroup>
									<FormGroup>
										<Input
											type="textarea"
											name="message"
											value={this.state.input.message}
											onChange={this.handleChange}
											class="form-control"
											placeholder="Enter your message"
											id="message"
										/>
										<div className="text-danger">
											{this.state.errors.message}
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
		fontSize: "2rem",
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
		fontSize: "1.5rem"
	},
};
export default Contact;
