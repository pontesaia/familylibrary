import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const FamilyCrest = ({state}) => {
	return (
		<React.Fragment>
			<Container>
				<Row>
					<Col xs="12" className="text-center mt-5 pt-3">
						<img
							src="/images/logoImage.png"
							id="logoImage"
							style={styles.logo}
							alt=""
						/>
						<h1 className="mt-3" id="logoTitle" style={styles.logoType}>
							family library
						</h1>
					</Col>
					<Col xs="12" className="text-center">
						<Button
							className="btn-block ml-auto"
							style={styles.buttonFamily}
							id="registerBtn"
							name="registerCollapsed"
						>
							{state.familyName.toUpperCase()}
							{"'S"}
						</Button>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

const styles = {
	logo: { width: "300px" },
	buttonFamily: {
		borderRadius: "8px",
		backgroundColor: "black",
		border: "solid black 3px",
		fontSize: "2rem",
		width: "38%",
		padding: "15px",
		marginBottom: "40px",
	},
	logoType: {
		fontFamily: "Comfortaa",
		fontSize: "60px",
	},
};

export default FamilyCrest;
