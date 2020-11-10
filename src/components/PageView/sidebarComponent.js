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
				{/* <Row className="row align-items-center">
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
				</Row> */}
				<Row className="col-md-12 d-none d-md-block bg-light sidebar">
					{/* <div className="sidebar-sticky"></div> */}
					<Col className="aligner">
						<div>
							<img src="/images/Ellipse.png" />
							<h1>Maria</h1>
							<h6>BOSTON, MA</h6>
						</div>
						{/* <NavItem>
							<NavLink>Active</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Link</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Link</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Disabled</NavLink>
						</NavItem> */}
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
