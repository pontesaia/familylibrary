import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import Fade from "react-reveal/Fade";

import Story from "./Story";
import PageViewLayout from "../PageViewLayout";

function MainFeed({ state }) {
	const { avatar, name } = state;
	const [currentUserStory, setCurrentUserStory] = useState("");
	const [mainFeedStoryFlag, setMainFeedStoryFlag] = useState(false);
	const [userStories, setUserStories] = useState([]);
	const [loading, setLoading] = useState(true);
	// const [authorInfo, setAuthorInfo] = useState([]);
	// const [titles, setTitles] = useState("");
	// const [stories, setStories] = useState("");

	const trimString = (str, length) => {
		if (str && str.length > length)
			return str.substring(0, length) + ".....";
		else return str;
	};

	const getStoryDate = (i) => {
		let createdAt;
		let date;
		createdAt = userStories[i]?.createdAt;
		date = JSON.stringify(new Date(createdAt).toDateString());
		date = date.substring(1, date.length - 1);
		return date;
	};
	const getStoryTime = (i) => {
		let createdAt = new Date(userStories[i]?.createdAt);
		let time = JSON.stringify(createdAt.toLocaleTimeString());
		time = time.substring(1, time.length - 1);
		return time;
	};

	const getCurrentUserStory = (story) => {
		setCurrentUserStory(story);
	};

	useEffect(() => {
		getUserStories();
	}, []);

	// useEffect(() => {
	// 	setLoading(false);
	// }, [userStories]);

	const getUserStories = () => {
		axios
			.get("/userStories/")
			.then((response) => {
				// if (response.data.length > 0) {
				getAuthorInfo(response.data)
					.then((response) => {
						setUserStories((prev) => [...prev, ...response]);
					})
					.then((response) => setLoading(false));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getAuthorInfo = async (stories) => {
		return Promise.all(
			stories.map((story, i) => {
				if (story.userId) {
					return axios
						.get(`/user/${story.userId}`)
						.then((response) => {
							const {
								name,
								givenName,
								familyName,
								avatar,
							} = response.data;
							const merge = {
								...story,
								name,
								givenName,
								familyName,
								avatar,
							};
							return merge;
						})

						.catch((error) => {
							console.log(error);
						});
				}
			})
		);
	};

	let renderData = !mainFeedStoryFlag ? (
		userStories?.map((d, i) =>
			d?.userId ? (
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
									src={userStories[i]?.avatar}
									style={styles.avatar}
									className="mb-2"
									alt="avatar"
								/>
							</Col>
							<Col xs="12" lg="3" className="px-0">
								<h5>{d?.title}</h5>
								<h6>
									<b>Posted By:</b>{" "}
								</h6>
								<h6>{userStories[i]?.name}</h6>
								<h6>
									<b>Date posted: </b>
								</h6>
								<h6>{getStoryDate(i)}</h6>
								<h6>{getStoryTime(i)}</h6>
								<h6 className="mb-4">{d?.tags}</h6>
							</Col>
							<Col xs="12" lg="7" className="pl-0 mb-2 pr-4">
								<div
									dangerouslySetInnerHTML={{
										__html: trimString(
											userStories[i]?.story,
											450
										),
									}}
								></div>
								<Button
									className="rounded-pill m-0"
									style={styles.readMoreButton}
									onClick={() => {
										getCurrentUserStory(userStories[i]);
										setMainFeedStoryFlag(true);
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
			) : null
		)
	) : (
		<Fade right duration={500}>
			<Story
				currentUserStory={currentUserStory}
				setMainFeedStoryFlag={setMainFeedStoryFlag}
				state={state}
			/>
		</Fade>
	);

	return (
		<React.Fragment>
			<PageViewLayout body={renderData} state={state} loading={loading}/>
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
		backgroundImage:
			"linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)",
	},
};

export default MainFeed;
