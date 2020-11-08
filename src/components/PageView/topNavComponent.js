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

class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<div className="componentContainer">
					<Container id="navItems" className="mb-4">
						<Row>
							<Col>
								<Navbar color="faded" light expand="md">
									<NavbarBrand href="/" className="mr-auto" />
									<Nav
										navbar
										className="justify-content-center mx-auto"
									>
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
					</Container>
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
};

export default TopNav;
