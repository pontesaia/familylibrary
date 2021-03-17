import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";

import Story from "./Story";
import PageViewLayout from "../PageViewLayout";

function MainFeed({ state }) {
	const { avatar, userId, name } = state;
	const [loading, setLoading] = useState(true);
	const history = useHistory();
	const [stories, setStories] = useState([]);
	const [sortedStories, setSortedStories] = useState([]);

	const trimString = (str, length) => {
		if (str && str.length > length) return str.substring(0, length) + ".....";
		else return str;
	};

	const getStoryDate = (story) => {
		let createdAt;
		let date;
		createdAt = story?.createdAt;
		date = JSON.stringify(new Date(createdAt).toDateString());
		date = date.substring(1, date.length - 1);
		return date;
	};
	const getStoryTime = (story) => {
		let createdAt = new Date(story?.createdAt);
		let time = JSON.stringify(createdAt.toLocaleTimeString());
		time = time.substring(1, time.length - 1);
		return time;
	};

	useEffect(() => {
		getUserStories();
	}, []);

	useEffect(() => {
		setLoading(false);
		let sortedStories = [...stories];
		sortedStories.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
		setSortedStories(sortedStories);
	}, [stories]);

	const getUserStories = () => {
		//get my user profile
		axios
			.get(`user/${userId}`)
			//get my family
			.then((response) => {
				axios.get(`familyGroup/${response.data.familyId}`).then((response) => {
					//check my family and get my members
					const familyMembers = response.data.groupMembers;
					//get stories from each member and save in usestate
					familyMembers.map((member) => {
						let storyData = {};
						let userData = {};
						axios
							.get(`user/${member}`)
							.then((response) => {
								userData = response.data;
							})
							.then((response) => {
								axios.get(`userStories/${member}`).then((response) => {
									storyData = response.data;
									storyData.map((storyD) => {
										storyD.userData = userData;
									});

									setStories((prev) => [...prev, ...storyData]);
								});
							});
					});
				});
			});
	};

	// let renderData = userStories?.map((d, i) =>
	let renderData = sortedStories?.map(
		(story, i) => (
			// story?.userId ? (
			<span key={i}>
				<hr className="horizRule mb-5 mt-4 px-0 mx-0" style={styles.horizRule} />
				<Container>
					<Row className="ml-2">
						<Col xs="12" lg="1" className="pr-3 px-0 text-lg-center">
							<img
								// src={userStories[i]?.avatar}
								src={story?.userData?.avatar}
								style={styles.avatar}
								className="mb-2"
								alt="avatar"
							/>
						</Col>
						<Col xs="12" lg="3" className="px-0">
							<h5>{story?.title}</h5>
							<h6>
								<b>Posted By:</b>{" "}
							</h6>
							{/* <h6>{userStories[i]?.name}</h6> */}
							<h6>{story?.userData?.name}</h6>
							<h6>
								<b>Date posted: </b>
							</h6>
							{/* <h6>{getStoryDate(i)}</h6>
							<h6>{getStoryTime(i)}</h6> */}
							<h6>{getStoryDate(story)}</h6>
							<h6>{getStoryTime(story)}</h6>
							<h6 className="mb-4">{story?.tags}</h6>
						</Col>
						<Col xs="12" lg="7" className="pl-0 mb-2 pr-4">
							<div
								dangerouslySetInnerHTML={{
									// __html: trimString(userStories[i]?.story, 450),
									__html: trimString(story?.story, 450),
								}}
							></div>
							<Button
								className="rounded-pill m-0"
								style={styles.readMoreButton}
								onClick={() => {
									history.push(`/story/${story._id}`);
								}}
							>
								<span>read more...</span>
							</Button>
						</Col>
						{/* <Col xs="12" lg="1" className="pl-0">
								<Row className="pl-3">
									<span type="button" title="Edit">
										<i
											class="fa fa-pencil-square-o"
											aria-hidden="true"
											style={styles.icon}
										></i>
									</span>
									<span type="button" title="Delete">
										<i
											class="fa fa-trash-o"
											aria-hidden="true"
											style={styles.icon}
										></i>
									</span>
								</Row>
							</Col> */}
					</Row>
				</Container>
			</span>
		)
		// ) : null
	);
	//  : (
	// 	<Fade right duration={500}>
	// 		<Story
	// 			currentUserStory={currentUserStory}
	// 			// setMainFeedStoryFlag={setMainFeedStoryFlag}
	// 			state={state}
	// 		/>
	// 	</Fade>
	// );

	return (
		<React.Fragment>
			<PageViewLayout body={renderData} state={state} loading={loading} />
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
	// icon: {
	// 	color: "gray",
	// 	fontSize: "2rem",
	// 	marginRight: "1rem"
	// },
	readMoreButton: {
		fontFamily: "Comfortaa",
		fontWeight: "400",
		fontSize: "20px",
		marginLeft: "8px",
		width: "152px",
		border: "none",
		backgroundImage: "linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)",
	},
};

export default MainFeed;
