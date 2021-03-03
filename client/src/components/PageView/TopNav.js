import React, { useState } from "react";
import {
	Navbar,
	Nav,
	NavbarBrand,
	NavItem,
	NavLink,
	Button,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import Logout from "../Home/Logout";

const TopNav = ({ state }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);

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
								<Button className="rounded-pill" style={styles.writeButton}>
									<span style={styles.plusSign}>+</span>
								</Button>
							</span>
						</Link>
					</NavItem>
					<NavItem style={styles.navItem}>
						<Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
							{/* <Link to="Logout" style={styles.navLinks}> */}
							<DropdownToggle
								style={{ backgroundColor: "transparent", border: "none" }}
							>
								{(
									<img
										src={state?.avatar}
										style={{ borderRadius: "50%", width: "4rem" }}
									/>
								) || <i class="fa fa-user fa-2x" aria-hidden="true" />}
							</DropdownToggle>
							<span style={{ fontSize: "1.4rem" }}>{state?.givenName || ""}</span>

							{/* </Link> */}
							<DropdownMenu>
								{/* <DropdownItem header>{state?.givenName}</DropdownItem> */}
								<DropdownItem onClick={toggleModal}>My Account</DropdownItem>
								<DropdownItem>
									<Link to="/MyStories" style={{ textDecoration: "none" }}>
										My Stories
									</Link>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									<Link to="Logout" style={{ textDecoration: "none" }}>
										<Logout />
									</Link>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</NavItem>
				</Nav>
			</Navbar>
			<Modal isOpen={modal} toggle={toggleModal} centered>
				<ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
				<ModalBody>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggleModal}>
						Do Something
					</Button>{" "}
					<Button color="secondary" onClick={toggleModal}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
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
		textDecoration: "none",
	},
	writeButton: {
		marginLeft: "8px",
		height: "2.75rem",
		width: "5rem",
		border: "none",
		backgroundColor: "hotpink",
		fontSize: "3.5rem",
		backgroundImage: "linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)",
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
