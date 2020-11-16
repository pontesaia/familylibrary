import React, { Component } from "react";
import { Container, Row, Col, Button, Collapse } from "reactstrap";
import $ from "jquery";

import MainNav from "./mainNavComponent";
import About from "./aboutComponent";
import Contact from "./contactComponent";
import Features from "./featuresComponent";
import Login from "./loginComponent";
import Register from "./registerComponent";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aboutCollapsed: false,
			contactCollapsed: false,
			featuresCollapsed: false,
			loginCollapsed: false,
			registerCollapsed: false,
		};
	}

	toggleLogoWidth = (state) => {
		const animateSpeed = 300;
		if (state) {
			$("#logoImage").stop().animate({ width: 550 }, animateSpeed);
			$("#logoTitle").stop().animate({ fontSize: 100 }, animateSpeed);
		} else {
			$("#logoImage").stop().animate({ width: 300 }, animateSpeed);
			$("#logoTitle").stop().animate({ fontSize: 40 }, animateSpeed);
		}
	};

	toggleComponent = (event) => {
		const {
			target: { name },
		} = event;
		this.setState({
			aboutCollapsed: false,
			contactCollapsed: false,
			featuresCollapsed: false,
			loginCollapsed: false,
			registerCollapsed: false,
			[name]: !this.state[name],
		});
		this.toggleLogoWidth(this.state[name]);
	};

	render() {
		return (
			<React.Fragment>
				<h1>{this.props.response.body}</h1>
				<Collapse isOpen={this.state.aboutCollapsed}>
					<About />
				</Collapse>
				<Collapse isOpen={this.state.contactCollapsed}>
					<Contact />
				</Collapse>
				<Collapse isOpen={this.state.featuresCollapsed}>
					<Features />
				</Collapse>
				<Collapse isOpen={this.state.loginCollapsed}>
					<Login toggleComponent={this.toggleComponent} />
				</Collapse>
				<Collapse isOpen={this.state.registerCollapsed}>
					<Register toggleComponent={this.toggleComponent} />
				</Collapse>
				<Container>
					<Row className="mt-5">
						<Col className="text-center">
							<MainNav toggleComponent={this.toggleComponent} />
						</Col>
					</Row>
					<Row className="mt-1">
						<Col className="text-center">
							<img
								src="/images/logoImage.png"
								id="logoImage"
								alt=""
							/>
							<h1
								className="mt-3"
								id="logoTitle"
								style={styles.logoType}
							>
								family library
							</h1>
						</Col>
					</Row>
					<Row className="text-center mt-4">
						<Col xs="12" md="6">
							<Button
								className="btn-block mb-2"
								style={styles.buttonLogin}
								id="loginBtn"
								name="loginCollapsed"
								onClick={this.toggleComponent}
							>
								LOG IN
							</Button>
						</Col>
						<Col xs="12" md="6">
							<Button
								className="btn-block mb-2"
								style={styles.buttonRegister}
								id="registerBtn"
								name="registerCollapsed"
								onClick={this.toggleComponent}
							>
								REGISTER
							</Button>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

const styles = {
	buttonLogin: {
		borderRadius: "8px",
		backgroundColor: "white",
		border: "solid black 3px",
		color: "black",
		fontSize: "2rem",
		width: "60%",
		padding: "15px",
	},
	buttonRegister: {
		borderRadius: "8px",
		backgroundColor: "black",
		border: "solid black 3px",
		fontSize: "2rem",
		width: "60%",
		padding: "15px",
	},
	logoType: {
		fontFamily: "Comfortaa",
		fontSize: "clamp(40px, 8vw, 100px)",
	},
};

export default Home;
