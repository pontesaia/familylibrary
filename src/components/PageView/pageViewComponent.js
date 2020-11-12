import React, { Component } from "react";
import TopNav from "./topNavComponent";
import Sidebar from "./sidebarComponent";
import BottomNav from "./bottomNavComponent";
import PageViewBody from "./pageViewBodyComponent";

import { Container, Row, Col } from "reactstrap";

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
							<Row className="flex-grow-1 m-2">
								<Col className=" mh-100 overflow-auto py-5 mr-5">
									<PageViewBody />
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="flex-shrink-0">
						<Col xs="12" className="px-0">
							<BottomNav />
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

export default PageView;
