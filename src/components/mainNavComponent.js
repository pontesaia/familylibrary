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

// import { NavLink } from "react-router-dom";

class MainNav extends Component {
	constructor(props) {
		super(props);
		this.state = { collapsed: false};
		//   const [collapsed, setCollapsed] = useState(true);
	}
    toggleNavbar = () => { this.setState({ collapsed: !this.state.collapsed }) };

	render() {
		return (
			<React.Fragment>
				<Container id="navItems">
					<Row>
						<Col>
							<Navbar color="faded" light expand="md">
								<NavbarBrand href="/" className="mr-auto" />
								<NavbarToggler
									onClick={this.toggleNavbar}
									className="mr-2"
								/>
								<Collapse isOpen={this.state.collapsed} navbar>
									<Nav
										navbar
										className="justify-content-center mx-auto"
									>
										<NavItem>
											<NavLink
												// className="nav-link"
												style={styles.navLinks}
												// to="/about"
												href="#"
												onClick={this.props.toggleAbout}
											>
												About
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												// className="nav-link"
												style={styles.navLinks}
												// to="/contact"
												href="#"
												onClick={
													this.props.toggleContact
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
												onClick={
													this.props.toggleFeatures
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
				</Container>
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

export default MainNav;
