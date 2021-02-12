import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import Fade from "react-reveal/Fade";

import Story from "./Story";
import PageViewLayout from "../PageViewLayout";
import DB from "../testDB/testDB.json";

const PersonalFeedPreview = ({ state }) => {
	const [currentUserStory, setCurrentUserStory] = useState("");
	const [myStories, setMyStories] = useState([]);
	const [personalPreviewStoryFlag, setPersonalPreviewStory] = useState(false);
	const [loading, setLoading] = useState(true);
	// const [toggleStory, setToggleStory] = useState(false);

	const trimString = (str, length) => {
		if (str && str.length > length)
			return str.substring(0, length) + ".....";
		else return str;
	};

	const getStoryDate = (d) => {
		let createdAt;
		let date;
		createdAt = d.createdAt;
		date = JSON.stringify(new Date(createdAt).toDateString());
		date = date.substring(1, date.length - 1);
		return date;
	};

	const getMyStories = (userId) => {
		return axios
			.get(`/userStories/${userId}`)
			.then((response) => {
				if (response.data.length > 0) {
					setMyStories(response.data);
				}
			})
			.then((response) => setLoading(false))
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getMyStories(state.userId);
	}, []);

	const getCurrentUserStory = (story) => {
		setCurrentUserStory(story);
		// setToggleStory(true);
	};

	let renderData = myStories ? (
		!personalPreviewStoryFlag ? (
			myStories.map((d, i) => (
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
									src={state.avatar}
									style={styles.avatar}
									className="mb-2"
									alt="avatar"
								/>
							</Col>
							<Col className="px-0 ml-0">
								<h5>{d.title}</h5>
								<h6>
									<b>Posted By:</b>{" "}
								</h6>
								<h6>{state.name}</h6>

								<h6>
									<b>Date posted:</b>{" "}
								</h6>
								<h6>{getStoryDate(d)}</h6>
								<h6 className="mb-4">{d.tags}</h6>
							</Col>
						</Row>
						<Row className="ml-5 mr-1">
							<Col
								xs="12"
								lg="11"
								className="px-0 offset-lg-1 ml-5 mb-2"
							>
								<div
									dangerouslySetInnerHTML={{
										__html: trimString(d.story, 450),
									}}
								></div>
								<Button
									className="rounded-pill mt-4 mb-2"
									style={styles.readMoreButton}
									onClick={() => {
										// getCurrentUserStory(DB.mystories[i]);
										getCurrentUserStory(myStories[i]);
										setPersonalPreviewStory(true);
									}}
								>
									<span>read more...</span>
								</Button>
							</Col>
						</Row>
					</Container>
				</span>
			))
		) : (
			<Fade right duration={500}>
				<Story
					currentUserStory={currentUserStory}
					setPersonalPreviewStory={setPersonalPreviewStory}
					state={state}
				/>
			</Fade>
		)
	) : null;
	return (
		<React.Fragment>
			<PageViewLayout body={renderData} state={state} loading={loading} />
		</React.Fragment>
	);
};

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
