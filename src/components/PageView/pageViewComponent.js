import React, { Component } from "react";
import TopNav from "./topNavComponent";
import Sidebar from "./sidebarComponent";
import BottomNav from "./bottomNavComponent";
import PageViewBody from "./pageViewBodyComponent";

import { Container, Row, Col} from "reactstrap";

class PageView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				{/* <div fluid> */}
					<Container fluid>
					<Row>
						<Col className="text-center px-0">
							<TopNav />
						</Col>
					</Row>
					<Row>
						<Col
							className="text-center"
							id="sidebar-wrapper"
							xs="3"
						>
							<Sidebar />
						</Col>
						<Col id="page-content-wrapper" xs="9">
							<PageViewBody />
						</Col>
					</Row>
					<Row>
						<Col className="text-center">
							<BottomNav />
						</Col>
					</Row>
					</Container>
				{/* </div> */}
			</React.Fragment>
		);
	}
}

export default PageView;
