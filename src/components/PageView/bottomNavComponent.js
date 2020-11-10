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
} from "reactstrap";

class BottomNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<div className="componentContainer footer">
					{/* <Container id="navItems"> */}
					<Row id="navItems">
						<Col>
							<Navbar
								color="faded"
								light
								expand="md"
								className="nav-fill w-100"
							>
								<NavbarBrand href="/" className="mr-auto" />
								<NavbarToggler
									onClick={this.toggleNavbar}
									className="mr-2"
								/>
								<Collapse isOpen={this.state.collapsed} navbar>
									<Nav navbar className="nav-fill w-100">
										<NavItem>
											<NavLink
												// className="nav-link"
												style={styles.navLinks}
												// to="/about"
												href="#"
												name="aboutCollapsed"
												onClick={
													this.props.toggleComponent
												}
											>
												About
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												// className="nav-link"
												style={styles.navLinks}
												// to="/about"
												href="#"
												name="inviteCollapsed"
												onClick={
													this.props.toggleComponent
												}
											>
												Invite
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												// className="nav-link"
												style={styles.navLinks}
												// to="/contact"
												href="#"
												name="contactCollapsed"
												onClick={
													this.props.toggleComponent
												}
											>
												Contact
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												// className="nav-link"
												style={styles.navLinks}
												// to="/features"
												href="#"
												name="featuresCollapsed"
												onClick={
													this.props.toggleComponent
												}
											>
												Features
											</NavLink>
										</NavItem>
									</Nav>
								</Collapse>
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
		paddingLeft: "52px",
		paddingRight: "52px",
	},
};

export default BottomNav;
