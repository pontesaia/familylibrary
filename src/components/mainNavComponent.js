import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
			<React.Fragment>
				<Container id="navItems">
					<Row>
						<Col>
							<Nav className="justify-content-center">
								<NavItem>
									<NavLink style={styles.navLinks} href="#">
										About
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink style={styles.navLinks} href="#">
										Contact
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink style={styles.navLinks} href="#">
										Features
									</NavLink>
								</NavItem>
							</Nav>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
    }
}

const styles = {
	navLinks: {
        fontFamily: 'Comfortaa',
        fontSize: '1.8rem',
        paddingLeft: '52px',
        paddingRight: '52px',
	},
};
 
export default MainNav;