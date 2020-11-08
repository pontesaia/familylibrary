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
				{/* <Container> */}
				<Row>
					<Col className="text-center">
						<TopNav />
					</Col>
				</Row>
				<Row>
					<Col className="text-center" xs="3">
						<Sidebar />
					</Col>
					<Col xs="9">
						<PageViewBody />
					</Col>
				</Row>
				<Row>
					<Col className="text-center">
						<BottomNav />
					</Col>
				</Row>
				{/* </Container> */}
			</React.Fragment>
		);
	}
}

export default PageView;
