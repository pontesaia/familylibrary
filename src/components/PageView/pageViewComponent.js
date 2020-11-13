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

						<Col className="mh-100 px-0" style={styles.mainBody}>
							<Row className="flex-grow-1">
								<Col className="mh-100 overflow-auto pt-5">
									<Row className="m-2">
										<Col className="offset-lg-1 p-0">
											<Search />
										</Col>
									</Row>
									<PageViewBody />
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
	mainBody: { overflowY: "auto", overflowX: "hidden" },
};

export default PageView;
