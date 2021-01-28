import React, { Component } from "react";
import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";


class BottomNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<Navbar
					expand="md"
					className="nav-fill w-100 footer py-4"
					id="navItems"
					style={styles.footer}
				>
					{/* <NavbarBrand href="/" className="mr-auto" /> */}
					<NavbarToggler
						onClick={this.toggleNavbar}
						className="mr-2"
					/>
					{/* <Collapse isOpen={this.state.collapsed} navbar> */}
					<Nav navbar className="w-100">
						<NavItem>
							<NavLink
								// className="nav-link"
								style={styles.navLinks}
								// to="/about"
								href="#"
								name="aboutCollapsed"
								onClick={this.props.toggleAbout}
							>
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<Link
								// className="nav-link"
								style={styles.navLinks}
								// to="/about"
								to="/MyStories"
								name="inviteCollapsed"
								// onClick={this.props.toggleComponent}
								// onClick={this.props.setPersonalFeedPreview}
								// onClick={() => {
								// 	this.props.setPersonalFeedPreview();
								// 	this.props.setPersonalPreviewStory(false);
								// }}
							>
								My Stories
							</Link>
						</NavItem>
						<NavItem>
							<NavLink
								// className="nav-link"
								style={styles.navLinks}
								// to="/contact"
								href="#"
								name="contactCollapsed"
								onClick={this.props.toggleContact}
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
								onClick={this.props.toggleFeatures}
							>
								Features
							</NavLink>
						</NavItem>
					</Nav>
					{/* </Collapse> */}
				</Navbar>
			</React.Fragment>
		);
	}
}

const styles = {
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
	},
};

export default BottomNav;
