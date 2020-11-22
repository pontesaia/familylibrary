import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";

import MainFeed from "./readComponents/mainFeedComponent";
import PersonalFeedPreview from "./readComponents/personalFeedPreviewComponent";
import ComposeStory from "./writeComponents/composeStoryComponent"
import DB from "./../../db.json";

class PageViewBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readFlag: false,
			writeFlag: true,
			preview: false,
			stories: [],
			userStories: [],
			profiles: [],
		};
	}

	toggleRead = () => {
		this.setState({
			writeFlag: false,
			readFlag: !this.state.readFlag,
		});
	};

	toggleWrite = () => {
		this.setState({ readFlag: false, writeFlag: !this.state.writeFlag });
	};

	onChangeTitle = (e) => {
		this.setState({
			title: e.target.value,
		});
	};
	onChangeStory = (html) => {
		this.setState({
			story: html,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const userStory = {
			title: this.state.title,
			story: this.state.story,
		};
		// console.log(userStory);
		// window.location = "/";
		axios
			.post("http://localhost:5000/userStories", userStory)
			.then((res) => console.log(res.data));
	};

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
					// console.log(this.state.titles);
					// console.log(this.state.stories);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	editUserStories() {}

	deleteUserStories() {}

	trimString(str, length) {
		if (str && str.length > length)
			return str.substring(0, length) + ".....";
		else return str;
	}

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
			this.state.readFlag &&
			this.state.profiles &&
			this.state.userStories
		) {
			renderData = (
				<PersonalFeedPreview
					userStories={this.state.userStories}
					profiles={this.state.profiles}
				/>
			);
		} else if (this.state.writeFlag) {
			renderData = (
				<ComposeStory
					userStories={this.state.userStories}
					profiles={this.state.profiles}
				/>
			);
		} else if (this.state.preview && this.state.profiles) {
			renderData = (
				<MainFeed
					userStories={this.state.userStories}
					profiles={this.state.profiles}
				/>
			);
		}

		return (
			<React.Fragment>
				{/* <Button onClick={this.toggleRead}>Read</Button> */}
				{/* <Button onClick={this.toggleWrite}>Write</Button> */}
				<div className="pb-4">{renderData}</div>
			</React.Fragment>
		);
	}
}

export default PageViewBody;
