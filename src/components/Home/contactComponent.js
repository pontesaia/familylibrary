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
		this.state = {};
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
										<h1 style={styles.header}>Contact</h1>
									</Col>
								</Row>
								<Form style={styles.form1}>
									<FormGroup>
										<Label for="exampleEmail">
											Let us help you!
										</Label>
									</FormGroup>
									<FormGroup>
										<Input
											type="email"
											name="email"
											id="exampleEmail"
											placeholder="Please enter email here"
										/>
									</FormGroup>
									<FormGroup>
										<Input
											type="textarea"
											name="text"
											id="exampleText"
											placeholder="Enter your Subject here."
										/>
									</FormGroup>
									<FormGroup>
										<Input
											type="textarea"
											name="text"
											id="exampleText"
											placeholder="Enter your message here."
										/>
									</FormGroup>
									<Button style={styles.sendBtn}>SEND</Button>
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
