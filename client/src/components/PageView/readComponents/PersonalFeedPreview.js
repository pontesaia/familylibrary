import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import StoryComponent from "./Story";
import PageViewLayout from "../PageViewLayout";
import DB from "../testDB/testDB.json";

function PersonalFeedPreview(props) {
	const [currentUserStory, setCurrentUserStory] = useState("");
	const [personalPreviewStoryFlag, setPersonalPreviewStory] = useState(false);
	const [toggleStory, setToggleStory] = useState(false);

	const trimString = (str, length) => {
		if (str && str.length > length)
			return str.substring(0, length) + ".....";
		else return str;
	};

	const getStoryDate = (i) => {
		let createdAt;
		let date;
		if (DB.mystories) {
			createdAt = DB.mystories[i].createdAt;
			date = JSON.stringify(new Date(createdAt).toDateString());
			date = date.substring(1, date.length - 1);
		}
		return date;
	};

	const getCurrentUserStory = (story) => {
		// e.preventDefault();
		// console.log(story)
		// this.setState({ currentUserStory: story, toggleStory: true });
		setCurrentUserStory(story);
		setToggleStory(true);
	};

	let renderData =
		// if (this.props.userStories)
		DB.mystories ? (
			!personalPreviewStoryFlag ? (
				// if (!this.state.toggleStory) {
				// renderData = this.props.userStories.map((d, i) => (
				DB.mystories.map((d, i) => (
					// <span key={this.props.userStories[i]._id}>
					<span key={i}>
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
										// src="/images/Ellipse2.png"
										// src={this.props.profiles[i].picture.large}
										src={DB.mystories[i].avatar}
										style={styles.avatar}
										className="mb-2"
										alt="avatar"
									/>
								</Col>
								<Col className="px-0 ml-0">
									<h5>{d.title}</h5>
									{/* <h6>Posted By: {d.author}</h6> */}
									<h6>
										<b>Posted By:</b>{" "}
										{/* {this.props.profiles[i].name.first}{" "} */}
										{/* {this.props.profiles[i].name.last} */}
									</h6>
									<h6>{DB.mystories[i].author}</h6>

									<h6>
										<b>Date posted:</b>{" "}
									</h6>
									<h6>{getStoryDate(i)}</h6>
									<h6 className="mb-4">{d.tags}</h6>
								</Col>
							</Row>
							<Row className="ml-5 mr-1">
								<Col
									xs="12"
									lg="11"
									className="px-0 offset-lg-1 ml-5 mb-2"
								>
									{/* <div
									dangerouslySetInnerHTML={{
										__html:
											"<p>" +
											d.story.replace(/\n/g, "</p><p>"),
									}}
								></div> */}
									<div
										dangerouslySetInnerHTML={{
											__html: trimString(
												DB.mystories[i].story,
												450
											),
										}}
									></div>
									{/* <Link to={`/MyStories/dc221e31cd784f36bfcb28c813cb6eca`}> */}

									<Button
										className="rounded-pill mt-4 mb-2"
										style={styles.readMoreButton}
										onClick={() => {
											getCurrentUserStory(
												DB.mystories[i]
											);
											setPersonalPreviewStory(true);
										}}
									>
										<span>read more...</span>
									</Button>
									{/* </Link> */}
								</Col>
							</Row>
						</Container>
					</span>
				))
			) : (
				// } else if (this.state.toggleStory) {
				<StoryComponent
					currentUserStory={currentUserStory}
					setPersonalPreviewStory={setPersonalPreviewStory}
				/>
			)
		) : null;
	return (
		<React.Fragment>
			<PageViewLayout body={renderData} />
		</React.Fragment>
	);
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

export default PersonalFeedPreview;
