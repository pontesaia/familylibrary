import React, { Component } from "react";
//import axios from "axios";
import { Redirect } from "react-router-dom";

import MainFeed from "./readComponents/MainFeed";
import PersonalFeedPreview from "./readComponents/PersonalFeedPreview";
import ComposeStory from "./writeComponents/ComposeStory";

class PageViewBody extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let renderData;
		if (
			this.props.mainFeedFlag &&
			this.props.userStories
		) {
			renderData = (
				<MainFeed
					userStories={this.props.userStories}
					mainFeedStoryFlag={this.props.mainFeedStoryFlag}
					setMainFeedStory={this.props.setMainFeedStory}
				/>
			);
		} else if (
			this.props.personalFeedPreviewFlag &&
			this.props.userStories
		) {
			renderData = (
				<PersonalFeedPreview
					userStories={this.props.userStories}
					personalPreviewStoryFlag={
						this.props.personalPreviewStoryFlag
					}
					setPersonalPreviewStory={this.props.setPersonalPreviewStory}
				/>
			);
		} else if (this.props.composeStoryFlag) {
			renderData = <ComposeStory setMainFeed={this.props.setMainFeed} />;
		}

		return (
			<React.Fragment>
				<Redirect to={this.props.redirect} />
				<div className="pb-4">{renderData}</div>
			</React.Fragment>
		);
	}
}

export default PageViewBody;
