import React, { Component } from "react";
import MainNav from "./mainNavComponent";
import { Container, Row, Col, Button } from "reactstrap";

class Home extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Container>
					<Row className="mt-5">
						<Col className="text-center">
							<MainNav />
						</Col>
					</Row>
					<Row className="mt-5">
						<Col className="text-center">
							<img src="/images/logoImage.png" />
							<h1 className="mt-3" style={styles.logoType}>
								family library
							</h1>
						</Col>
					</Row>
					<Row className="text-center mt-5">
						<Col xs="12" md="6">
							<Button
								className="btn-block ml-auto"
								style={styles.buttonLogin}
							>
								LOG IN
							</Button>
						</Col>
						<Col xs="12" md="6">
							<Button
								className="btn-block"
								style={styles.buttonRegister}
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
		padding: "30px 0 30px 0",
		// margin: "0 50px 0 50px",
		// marginLeft: "50px",
		// marginRight: "50px"
		width: "80%",
	},
	buttonRegister: {
		borderRadius: "8px",
		backgroundColor: "black",
		border: "solid black 3px",
		fontSize: "2rem",
		padding: "30px 0 30px 0",
		// margin: "0 50px 0 50px",
		width: "80%",
	},
	logoType: {
		fontFamily: "Comfortaa",
		fontSize: "clamp(40px, 8vw, 100px)",
	},
};

export default Home;
