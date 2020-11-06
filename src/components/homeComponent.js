import React, { Component } from "react";
import { Container, Row, Col, Button, Collapse } from "reactstrap";

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
			logoWidth: "600px",
		};
	}

	toggleLogoWidth = (state) => {
		if (state) {
			this.setState({
				logoWidth: "550px",
			});
		} else {
			this.setState({
				logoWidth: "300px",
			});
		}
	};

	toggleAbout = () => {
		this.toggleLogoWidth(this.state.aboutCollapsed);

		this.setState({
			aboutCollapsed: !this.state.aboutCollapsed,
			contactCollapsed: false,
			featuresCollapsed: false,
			loginCollapsed: false,
			registerCollapsed: false,
		});
	};
	toggleContact = () => {
		this.toggleLogoWidth(this.state.contactCollapsed);

		this.setState({
			aboutCollapsed: false,
			contactCollapsed: !this.state.contactCollapsed,
			featuresCollapsed: false,
			loginCollapsed: false,
			registerCollapsed: false,
		});
	};
	toggleFeatures = () => {
		this.toggleLogoWidth(this.state.featuresCollapsed);

		this.setState({
			aboutCollapsed: false,
			contactCollapsed: false,
			featuresCollapsed: !this.state.featuresCollapsed,
			loginCollapsed: false,
			registerCollapsed: false,
		});
	};
	toggleLogin = () => {
		this.toggleLogoWidth(this.state.loginCollapsed);

		this.setState({
			aboutCollapsed: false,
			contactCollapsed: false,
			featuresCollapsed: false,
			loginCollapsed: !this.state.loginCollapsed,
			registerCollapsed: false,
		});
	};
	toggleRegister = () => {
		this.toggleLogoWidth(this.state.registerCollapsed);

		this.setState({
			aboutCollapsed: false,
			contactCollapsed: false,
			featuresCollapsed: false,
			loginCollapsed: false,
			registerCollapsed: !this.state.registerCollapsed,
		});
	};

	render() {
		return (
			<React.Fragment>
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
					<Login toggleLogin={this.toggleLogin} />
				</Collapse>
				<Collapse isOpen={this.state.registerCollapsed}>
					<Register toggleRegister={this.toggleRegister} />
				</Collapse>
				<Container>
					<Row className="mt-5">
						<Col className="text-center">
							<MainNav
								toggleAbout={this.toggleAbout}
								toggleContact={this.toggleContact}
								toggleFeatures={this.toggleFeatures}
							/>
						</Col>
					</Row>
					<Row className="mt-1">
						<Col className="text-center">
							<img
								src="/images/logoImage.png"
								id="logoImage"
								alt=""
								// width={this.state.logoWidth}
								style={{ width: this.state.logoWidth }}
							/>
							<h1 className="mt-3" style={styles.logoType}>
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
								onClick={this.toggleLogin}
							>
								LOG IN
							</Button>
						</Col>
						<Col xs="12" md="6">
							<Button
								className="btn-block mb-2"
								style={styles.buttonRegister}
								id="registerBtn"
								onClick={this.toggleRegister}
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
