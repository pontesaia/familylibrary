import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import PageViewBody from "./PageViewBody";
import Search from "./Search";
import PageViewLayout from "./PageViewLayout";

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
				<PageViewLayout
					body={
						<PageViewBody
							mainFeedStoryFlag={this.state.mainFeedStoryFlag}
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
							composeStoryFlag={this.state.composeStoryFlag}
							userStories={this.state.userStories}
							setMainFeed={this.setMainFeed}
							redirect={this.state.redirect}
						/>
					}
				/>
			</React.Fragment>
		);
	}
}

const styles = {
	footer: { position: "fixed", left: "0", bottom: "0", width: "100%" },
	mainBody: { overflowY: "auto", overflowX: "hidden" },
};

export default PageView;
