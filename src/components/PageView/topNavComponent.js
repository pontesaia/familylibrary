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

class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<div id="navItems" className="componentContainer">
					{/* <Container id="navItems" className="pb-4"> */}
					<Row>
						<Col xs="3">
							<img
								src="/images/logoImage.png"
								style={{ width: "150px" }}
								id="brandLogo"
							/>
							<h1 id="brandLogoTitle" style={styles.brandLogoTitle}>family library</h1>
						</Col>
						<Col xs="9">
							<Navbar color="faded" light expand="md">
								<NavbarBrand href="/" className="" />
								<Nav navbar className="nav-fill w-100">
									<NavItem>
										<NavLink
											style={styles.navLinks}
											href="#"
										>
											Read
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											style={styles.navLinks}
											href="#"
										>
											Write
											<Button
												className="rounded-pill bg-gradient-primary"
												style={styles.writeButton}
											>
												<span style={styles.plusSign}>+</span>
											</Button>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											style={styles.navLinks}
											href="#"
										>
											Logout
										</NavLink>
									</NavItem>
								</Nav>
							</Navbar>
						</Col>
					</Row>
					{/* </Container> */}
				</div>
			</React.Fragment>
		);
	}
}

const styles = {
	navLinks: {
		fontFamily: "Comfortaa",
		fontSize: "1.8rem",
		// paddingLeft: "52px",
		// paddingRight: "52px",
	},
	writeButton: {
		marginLeft: "8px",
		height: "2.75rem",
		width: "5rem",
		border: "none",
		backgroundColor: "hotpink",
		fontSize: "3.5rem",
		// backgroundColor: "linearGradient(to right, #FF00D6, #FF4D00)",
	},
	plusSign: {
		position: "relative",
		top: "-22px",
	},
	brandLogoTitle: {
		fontFamily: "Comfortaa",
		fontSize: "2.7rem",
		marginTop: "10px",
		letterSpacing: "-1.1px",
		lineHeight: "2.5rem"
	},
};

export default TopNav;
