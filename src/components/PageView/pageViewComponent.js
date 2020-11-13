import React, { Component } from "react";
import { Container, Row, Col, Collapse } from "reactstrap";

import TopNav from "./topNavComponent";
import Sidebar from "./sidebarComponent";
import BottomNav from "./bottomNavComponent";
import PageViewBody from "./pageViewBodyComponent";
import Search from "./searchComponent";

class PageView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<Container
					fluid
					className="d-flex flex-column vh-100 overflow-hidden"
				>
					<Row>
						<Col className="px-0">
							<TopNav />
						</Col>
					</Row>
					<Row className="flex-grow-1 overflow-hidden">
						<Col xs="2" className="mh-100 overflow-auto">
							<Sidebar />
						</Col>

						<Col className="mh-100 overflow-auto">
							{/* <div style={styles.fullWidth}>
								<div style={styles.wrap}></div>
							</div> */}
							<Row className="flex-grow-1 m-2">
								<Col className=" mh-100 overflow-auto py-5 mr-5">
									<Row>
										<Col className="offset-1 pl-5">
											<Search />
										</Col>
									</Row>
									<hr />
									<Row>
										<Col xs="1">
											<div>
												<img src="/images/Ellipse.png" />
											</div>
										</Col>
										<Col xs="11" className="pl-5">
											<PageViewBody />
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className="flex-shrink-0 mt-5 pt-5">
						<Col xs="12" className="px-0" styles={styles.footer}>
							<BottomNav />
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

const styles = {
	footer: { position: "fixed", left: "0", bottom: "0", width: "100%" },
	fullWidth: {
		width: "100%",
		background: "black",
	},
	wrap: {
		width: "80%",
		height: "1px",
		margin: "0 auto",
		backgroundColor: "black",
	},
};

export default PageView;
