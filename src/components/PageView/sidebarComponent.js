import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	Navbar,
	Nav,
	NavbarBrand,
	NavItem,
	NavLink,
	NavbarToggler,
	Collapse,
	Button,
} from "reactstrap";

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<Row className="flex-column sidebar h-100 d-none d-lg-block">
					<Col className="text-center">
						<div>
							<img
								src="/images/Ellipse.png"
								style={styles.avatar}
							/>
							<h1>Maria</h1>
							<h6>BOSTON, MA</h6>
						</div>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}

const styles = {
	avatar: {
		width: "150px",
	},
};

export default Sidebar;
