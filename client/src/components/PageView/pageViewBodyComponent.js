import React, { Component } from "react";
import axios from "axios";

import MainFeed from "./readComponents/mainFeedComponent";
import PersonalFeedPreview from "./readComponents/personalFeedPreviewComponent";
import ComposeStory from "./writeComponents/composeStoryComponent";

class PageViewBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stories: [],
			userStories: null,
			profiles: null,
		};
	}

	buildFakeUserInfo() {
		//get random user info
		axios
			.get("https://randomuser.me/api/?results=11", { crossdomain: true })
			.then((response) => {
				if (response.data) {
					// const img = response.data.results[0].picture.large;
					this.setState({
						profiles: response.data.results,
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	getUserStories() {
		//get userStories
		axios
			.get("http://localhost:5000/userStories")
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

	editUserStories() {}

	deleteUserStories() {}

	componentDidMount() {
		//builder fake users
		this.buildFakeUserInfo();
		this.getUserStories();
	}

	render() {
		let renderData;
		let data = [];
		for (let i = 0; i < 11; ++i) {
			data.push({ id: i });
		}
		if (
			this.props.mainFeedFlag &&
			this.state.profiles &&
			this.state.userStories
		) {
			renderData = (
				<MainFeed
					userStories={this.state.userStories}
					profiles={this.state.profiles}
				/>
			);
		} else if (
			this.props.personalFeedPreviewFlag &&
			this.state.profiles &&
			this.state.userStories
		) {
			renderData = (
				<PersonalFeedPreview
					userStories={this.state.userStories}
					profiles={this.state.profiles}
				/>
			);
		} else if (this.props.composeStoryFlag) {
			renderData = <ComposeStory />;
		}

		return (
			<React.Fragment>
				{/* <Button onClick={this.toggleMainFeed}>Read</Button> */}
				{/* <Button onClick={this.toggleWrite}>Write</Button> */}
				<div className="pb-4">{renderData}</div>
			</React.Fragment>
		);
	}
}

export default PageViewBody;
