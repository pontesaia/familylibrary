import React, { Component } from "react";
import {Row, Col} from "reactstrap"

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<Row className="row align-items-center">
					<Col
						className="col my-auto align-self-center"
						style={{ borderRight: "solid 2px #9efdf5" }}
					>
						<div style={styles.content}>
							<img src="/images/Ellipse.png" />
							<h1 className="sidebar">Maria</h1>
							<h6 className="sidebar">BOSTON, MA</h6>
						</div>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}

const styles = {
	content: {
		// margin: "0",
		// position: "absolute",
		// top: "50%",
		// transform: "translateY(-50%)",
		paddingTop: "400px",
		maxWidth: "400px",
	},
};

export default Sidebar;
