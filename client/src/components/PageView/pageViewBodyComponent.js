import React, { Component } from "react";
import axios from "axios";

import MainFeed from "./readComponents/mainFeedComponent";
import PersonalFeedPreview from "./readComponents/personalFeedPreviewComponent";
import ComposeStory from "./writeComponents/composeStoryComponent";

class PageViewBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profiles: null,
		};
	}

	buildFakeUserInfo() {
		//get random user info
		// if(this.props.userStories)
		axios
			.get("https://randomuser.me/api/?results=35", { crossdomain: true })
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



	editUserStories() {}

	deleteUserStories() {}

	componentDidMount() {
		//builder fake users
		this.buildFakeUserInfo();
		// this.getUserStories();
	}

	render() {
		let renderData;
		// let data = [];
		// if (this.props.userStories) {
		// 	for (let i = 0; i < this.props.userStories.length; ++i) {
		// 		data.push({ id: i });
		// 	}
		// }
		if (
			this.props.mainFeedFlag &&
			this.state.profiles &&
			this.props.userStories
		) {
			renderData = (
				<MainFeed
					userStories={this.props.userStories}
					profiles={this.state.profiles}
				/>
			);
		} else if (
			this.props.personalFeedPreviewFlag &&
			this.state.profiles &&
			this.props.userStories
		) {
			renderData = (
				<PersonalFeedPreview
					userStories={this.props.userStories}
					profiles={this.state.profiles}
				/>
			);
		} else if (this.props.composeStoryFlag) {
			renderData = <ComposeStory setMainFeed={this.props.setMainFeed} />;
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
