import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

import TopNav from "./topNavComponent";
import Sidebar from "./sidebarComponent";
import BottomNav from "./bottomNavComponent";
import PageViewBody from "./pageViewBodyComponent";
import Search from "./searchComponent";

class PageView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mainFeedStoryFlag: false,
			personalPreviewStoryFlag: false,
			mainFeedFlag: true,
			personalFeedPreviewFlag: false,
			composeStoryFlag: false,
			redirect: "/Feed",
			titles: [],
			stories: [],
			userStories: null,
		};
	}
	setMainFeedStory = (flag) => {
		this.setState({ mainFeedStoryFlag: flag });
	};

	setPersonalPreviewStory = (flag) => {
		this.setState({ personalPreviewStoryFlag: flag });
	};

	setMainFeed = () => {
		this.getUserStories();
		this.setState({
			mainFeedFlag: true,
			personalFeedPreviewFlag: false,
			composeStoryFlag: false,
			redirect: "/Feed",
		});
	};

	setPersonalFeedPreview = () => {
		this.getUserStories();
		this.setState({
			mainFeedFlag: false,
			personalFeedPreviewFlag: true,
			composeStoryFlag: false,
			redirect: "/PersonalPreview",
		});
	};

	setComposeStory = () => {
		this.setState({
			mainFeedFlag: false,
			personalFeedPreviewFlag: false,
			composeStoryFlag: true,
			redirect: "/ComposeStory",
		});
	};

	getUserStories() {
		//get userStories
		axios
			.get("/userStories/")
			.then((response) => {
				if (response.data.length > 0) {
					this.setState({
						userStories: response.data,
						titles: response.data.map(
							(userStory) => userStory.title
						),
						stories: response.data.map(
							(userStory) => userStory.story
						),
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.getUserStories();
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
							<TopNav
								setMainFeed={this.setMainFeed}
								setComposeStory={this.setComposeStory}
								setMainFeedStory={this.setMainFeedStory}
							/>
						</Col>
					</Row>
					<Row className="flex-grow-1 overflow-hidden">
						<Col xs="0" lg="2" className="mh-100 overflow-auto">
							<Sidebar />
						</Col>

						<Col
							xs="12"
							lg="10"
							className="mh-100 px-0"
							style={styles.mainBody}
						>
							<Row className="flex-grow-1">
								<Col className="mh-100 pt-5">
									<Row className="m-2">
										<Col className="offset-lg-1 p-0">
											<Search />
										</Col>
									</Row>
									<PageViewBody
										mainFeedStoryFlag={
											this.state.mainFeedStoryFlag
										}
										setMainFeedStory={this.setMainFeedStory}
										personalPreviewStoryFlag={
											this.state.personalPreviewStoryFlag
										}
										setPersonalPreviewStory={
											this.setPersonalPreviewStory
										}
										mainFeedFlag={this.state.mainFeedFlag}
										personalFeedPreviewFlag={
											this.state.personalFeedPreviewFlag
										}
										composeStoryFlag={
											this.state.composeStoryFlag
										}
										userStories={this.state.userStories}
										setMainFeed={this.setMainFeed}
										redirect={this.state.redirect}
									/>
								</Col>
							</Row>
						</Col>
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

export default PageView;
