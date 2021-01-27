import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";

import StoryComponent from "./Story";
import PageViewLayout from "../PageViewLayout";


class MainFeed extends Component {
	constructor(props) {
		super(props);
		this.state = { currentUserStory: "" };
	}

	trimString(str, length) {
		if (str && str.length > length)
			return str.substring(0, length) + ".....";
		else return str;
	}

	getStoryDate(i) {
		let createdAt;
		let date;
		if (this.state.userStories) {
			createdAt = this.state.userStories[i].createdAt;
			date = JSON.stringify(new Date(createdAt).toDateString());
			date = date.substring(1, date.length - 1);
		}
		return date;
	}

	getCurrentUserStory(story) {
		this.setState({ currentUserStory: story });
	}

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
		let renderData = null;
		if (this.state.userStories)
			// if (!this.props.mainFeedStoryFlag) {
			renderData = this.state.userStories.map((d, i) => (
				<span key={this.state.userStories[i]._id}>
					<hr
						className="horizRule mb-5 mt-4 px-0 mx-0"
						style={styles.horizRule}
					/>
					<Container>
						<Row className="ml-2">
							<Col
								xs="12"
								lg="1"
								className="pr-3 px-0 text-lg-center"
							>
								<img
									src={this.state.userStories[i].avatar}
									style={styles.avatar}
									className="mb-2"
									alt="avatar"
								/>
							</Col>
							<Col xs="12" lg="3" className="px-0">
								<h5>{d.title}</h5>
								<h6>
									<b>Posted By:</b>{" "}
								</h6>
								<h6>{this.state.userStories[i].author}</h6>
								<h6>
									<b>Date posted: </b>
								</h6>
								<h6>{this.getStoryDate(i)}</h6>
								<h6 className="mb-4">{d.tags}</h6>
							</Col>
							<Col xs="12" lg="7" className="pl-0 mb-2 pr-4">
								<div
									dangerouslySetInnerHTML={{
										__html: this.trimString(
											this.state.userStories[i].story,
											450
										),
									}}
								></div>
								<Button
									className="rounded-pill m-0"
									style={styles.readMoreButton}
									onClick={() => {
										this.getCurrentUserStory(
											this.state.userStories[i]
										);
										this.props.setMainFeedStory(true);
									}}
								>
									<span>read more...</span>
								</Button>
							</Col>
							<Col xs="12" lg="1" className="pl-0">
								<Row className="pl-3">
									<span type="button" title="Edit"></span>
									<span type="button" title="Delete"></span>
								</Row>
							</Col>
						</Row>
					</Container>
				</span>
			));
		// } else if (this.props.mainFeedStoryFlag) {
		// 	renderData = (
		// 		<StoryComponent
		// 			currentUserStory={this.state.currentUserStory}
		// 		/>
		// 	);
		// }
		return (
			<React.Fragment>
				<PageViewLayout body={renderData} />
			</React.Fragment>
		);
	}
}

const styles = {

	avatar: {
		width: "clamp(10px, 100%, 105px)",
		borderRadius: "50%",
	},
	horizRule: {
		width: "calc(100% + 30px)",
		borderTop: ".5px solid rgba(0,0,0,.10)",
	},
	icons: {
		color: "gray",
	},
	readMoreButton: {
		fontFamily: "Comfortaa",
		fontWeight: "400",
		fontSize: "20px",
		marginLeft: "8px",
		width: "152px",
		border: "none",
		backgroundImage:
			"linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)",
	},
};

export default MainFeed;
