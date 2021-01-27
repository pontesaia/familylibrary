import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand, NavItem, NavLink, Button } from "reactstrap";
import { Redirect, Link } from "react-router-dom";

class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<Navbar
					expand="md"
					className="px-0 py-4 flex-shrink-0 footer"
					id="navItems"
				>
					<NavbarBrand href="/" className="d-none d-lg-block">
						<div>
							<img
								src="/images/logoImage.png"
								style={{ width: "150px" }}
								id="brandLogo"
								alt="brandLogo"
							/>
							<h1
								id="brandLogoTitle"
								style={styles.brandLogoTitle}
							>
								family library
							</h1>
						</div>
					</NavbarBrand>
					<Nav navbar className="nav-fill w-100" style={styles.nav}>
						<NavItem>
							<Link
								to="/Feed"
								style={styles.navLinks}
								// onClick={() => {
								// 	this.props.setMainFeed();
								// 	this.props.setMainFeedStory(false);
								// }}
								// onClick={() => {
								// 	this.props.setMainFeed();
								// 	this.props.setMainFeedStory(false);
								// }}
							>
								Stories
							</Link>
						</NavItem>
						<NavItem>
							<Link
								to="/ComposeStory"
								style={styles.navLinks}
							>
								Write
								<span className="d-none d-lg-inline">
									<Button
										className="rounded-pill"
										style={styles.writeButton}
									>
										<span style={styles.plusSign}>+</span>
									</Button>
								</span>
							</Link>
						</NavItem>
						<NavItem>
							<NavLink href="#" style={styles.navLinks}>
								Log Out
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</React.Fragment>
		);
	}
}

const styles = {
	nav: {
		paddingLeft: "200px",
	},
	navLinks: {
		fontFamily: "Comfortaa",
		fontSize: "1.8rem",
	},
	writeButton: {
		marginLeft: "8px",
		height: "2.75rem",
		width: "5rem",
		border: "none",
		backgroundColor: "hotpink",
		fontSize: "3.5rem",
		backgroundImage:
			"linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)",
	},
	plusSign: {
		position: "relative",
		top: "-22px",
	},
	brandLogoTitle: {
		fontFamily: "Comfortaa",
		fontSize: "clamp(1.5rem, 2vw, 2rem)",
		marginTop: "20px",
		letterSpacing: "-1.1px",
		lineHeight: "2.5rem",
		textAlign: "center",
	},
};

export default TopNav;
