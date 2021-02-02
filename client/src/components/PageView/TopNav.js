import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";

const TopNav = () => {
	return (
		<React.Fragment>
			<Navbar
				expand="md"
				className="px-0 py-4 flex-shrink-0 footer"
				id="navItems"
				style={styles.navbar}
			>
				<NavbarBrand href="/" className="d-none d-lg-block">
					<div>
						<img
							src="/images/logoImage.png"
							style={{ width: "150px" }}
							id="brandLogo"
							alt="brandLogo"
						/>
						<h1 id="brandLogoTitle" style={styles.brandLogoTitle}>
							family library
						</h1>
					</div>
				</NavbarBrand>
				<Nav navbar className="nav-fill w-100" style={styles.nav}>
					<NavItem style={styles.navItem}>
						<Link to="/Feed" style={styles.navLinks}>
							Stories
						</Link>
					</NavItem>
					<NavItem style={styles.navItem}>
						<Link to="/ComposeStory" style={styles.navLinks}>
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
					<NavItem style={styles.navItem}>
						<NavLink href="#" style={styles.navLinks}>
							Log Out
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</React.Fragment>
	);
};

const styles = {
	navbar: {
		zIndex: "9999",
	},
	nav: {
		paddingLeft: "200px",
	},
	navItem: {
		paddingTop: "15px",
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
