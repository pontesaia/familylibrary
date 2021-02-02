import React, { Component } from "react";
import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";


const BottomNav = () => {
		return (
			<React.Fragment>
				<Navbar
					expand="md"
					className="nav-fill w-100 footer py-4"
					id="navItems"
					style={styles.footer}
				>
					<NavbarToggler
						// onClick={this.toggleNavbar}
						className="mr-2"
					/>
					<Nav navbar className="w-100">
						<NavItem style={styles.navItem}>
							<Link
								style={styles.navLinks}
								to="/FamilyView/About"
								name="aboutCollapsed"
							>
								About
							</Link>
						</NavItem>
						<NavItem style={styles.navItem}>
							<Link
								style={styles.navLinks}
								to="/MyStories"
								name="inviteCollapsed"
							>
								My Stories
							</Link>
						</NavItem>
						<NavItem style={styles.navItem}>
							<Link
								style={styles.navLinks}
								to="/FamilyView/Contact"
								name="contactCollapsed"
							>
								Contact
							</Link>
						</NavItem>
						<NavItem style={styles.navItem}>
							<Link
								style={styles.navLinks}
								to="/FamilyView/Features"
								name="featuresCollapsed"
							>
								Features
							</Link>
						</NavItem>
					</Nav>
				</Navbar>
			</React.Fragment>
		);
	}

const styles = {
	navItem: {
		paddingTop: "10px",
	},
	navLinks: {
		fontFamily: "Comfortaa",
		fontSize: "1.8rem",
		// marginLeft: "auto"
		// marginLeft: "100px"
	},
	footer: {
		position: "fixed",
		height: "100px",
		bottom: "0",
		width: "100%",
		borderTop: "white 3px solid",
	},
};

export default BottomNav;
