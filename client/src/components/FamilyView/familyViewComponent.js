import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";

import TopNav from "../PageView/topNavComponent";
import BottomNav from "../PageView/bottomNavComponent";
import FamilyCrest from "../FamilyView/familyCrestComponent";
import About from "../Home/aboutComponent";
import Contact from "../Home/contactComponent";
import Features from "../Home/featuresComponent";

class FamilyView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aboutFlag: true,
			contactFlag: false,
			featuresFlag: false,
		};
	}

	toggleAbout = () => {
		this.setState({
			aboutFlag: true,
			contactFlag: false,
			featuresFlag: false,
		});
	};

	toggleContact = () => {
		this.setState({
			aboutFlag: false,
			contactFlag: true,
			featuresFlag: false,
		});
	};

	toggleFeatures = () => {
		this.setState({
			aboutFlag: false,
			contactFlag: false,
			featuresFlag: true,
		});
	};

	render() {
		let linkComponent = null;
		if (this.state.aboutFlag) {
			linkComponent = <About />;
		} else if (this.state.contactFlag) {
			linkComponent = <Contact />;
		} else if (this.state.featuresFlag) {
			linkComponent = <Features />;
		}
		return (
			<React.Fragment>
				<Container
					fluid
					className="d-flex flex-column vh-100 overflow-hidden"
				>
					<Row>
						<Col className="px-0">
							<TopNav
								setMainFeed={this.setMainFeed}
								setComposeStory={this.setComposeStory}
								setMainFeedStory={this.setMainFeedStory}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<FamilyCrest />
						</Col>
					</Row>
					<Row>
						<Col className="p-0">{linkComponent}</Col>
					</Row>
					<Row className="flex-shrink-0 mt-5 pt-5">
						<Col
							xs="12"
							className="px-0 pt-1"
							styles={styles.footer}
						>
							<BottomNav
								setPersonalPreviewStory={
									this.setPersonalPreviewStory
								}
								setPersonalFeedPreview={
									this.setPersonalFeedPreview
								}
								toggleAbout={this.toggleAbout}
								toggleContact={this.toggleContact}
								toggleFeatures={this.toggleFeatures}
							/>
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

export default FamilyView;
