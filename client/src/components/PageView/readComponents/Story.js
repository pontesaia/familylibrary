import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import PageViewLayout from "../PageViewLayout";

const Story = ({
	// currentUserStory,
	// setMainFeedStoryFlag,
	// setPersonalPreviewStory,
	state,
}) => {
	const { avatar, name } = state;
	const [currentUserStory, setCurrentUserStory] = useState("");
	const history = useHistory();
	const [loading, setLoading] = useState(true);
	const getStoryDate = () => {
		let createdAt;
		let date;
		if (currentUserStory) {
			createdAt = currentUserStory.createdAt;
			date = JSON.stringify(new Date(createdAt).toDateString());
			date = date.substring(1, date.length - 1);
		}
		return date;
	};

	useEffect(() => {
		getStory();
	}, []);

	let { id } = useParams();

	const getStory = () => {
		axios
			.get(`/userStories/userStory/${id}`)
			.then((response) => {
				getAuthor(response.data)
					.then((response) => {
						setCurrentUserStory(response);
					})
					.then((response) => setLoading(false));
				// return response;
				// if(!response.userId) setUser(data)
			})
			.catch((error) => {
				console.log("Error");
				console.log(error);
			});
	};

	const getAuthor = async (story) => {
		const res = await axios
			.get(`/user/${story.userId}`)
			.then((response) => {
				const { name, givenName, familyName, avatar } = response.data;
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
		return res;
	};

	const deleteStory = (id) => {
		// console.log("DELETING!!!!!!!!");
		axios.delete(`/userStories/${id}`).then((res) => {
			console.log(res.data);
			// if (setMainFeedStoryFlag) history.push("/Feed");
			// else if (setPersonalPreviewStory) history.push("/MyStories");
			history.push("/MyStories");
		});
	};

	let editDeleteBtns = currentUserStory.userId === state.userId ? (
		<Col xs="3" lg="2" className="pl-0">
			<Row className="pl-3">
				<span type="button" title="Edit">
					<i className="fa fa-pencil-square-o" aria-hidden="true" style={styles.icon}></i>
				</span>
				<span
					type="button"
					title="Delete"
					onClick={() => deleteStory(currentUserStory?._id)}
				>
					<i className="fa fa-trash-o" aria-hidden="true" style={styles.icon}></i>
				</span>
			</Row>
		</Col>
	) : <div></div>

	let renderData = (
		<React.Fragment>
			<hr className="horizRule mb-5 mt-4 px-0 mx-0" style={styles.horizRule} />
			<Container>
				<Row className="ml-2">
					<Col xs="12" lg="1" className="pr-3 px-0 text-lg-center ">
						<img
							// src={currentUserStory?.avatar || avatar}
							src={currentUserStory?.avatar}
							style={styles.avatar}
							className="mb-2"
							alt="avatar"
						/>
					</Col>
					<Col xs="9" className="">
						<h5>{currentUserStory?.title}</h5>
						<h6>
							{/* <b>Posted By:</b> {currentUserStory?.author || name} */}
							<b>Posted By:</b> {currentUserStory?.name}
						</h6>
						<h6>
							<b>Date posted:</b> {getStoryDate()}
						</h6>
					</Col>
					{editDeleteBtns}
				</Row>
				<Row className="ml-4 mr-5">
					<Col xs="12" lg="11" className="px-0 offset-lg-1 mt-2 pl-1">
						<div
							dangerouslySetInnerHTML={{
								__html: currentUserStory?.story,
							}}
						></div>
					</Col>
					<Button
						className="rounded-pill mt-4 mb-2"
						style={styles.readMoreButton}
						onClick={() => {
							history.goBack()
							// if (setMainFeedStoryFlag) setMainFeedStoryFlag(false);
							// else if (setPersonalPreviewStory) setPersonalPreviewStory(false);

							// this.getCurrentUserStory(
							// 	DB.mystories[i]
							// );
							// this.setPersonalPreviewStory(
							// 	true
							// );
						}}
					>
						<span>Back To Stories...</span>
					</Button>
				</Row>
			</Container>
		</React.Fragment>
	);
	return (
		<React.Fragment>
			<PageViewLayout body={renderData} state={state} loading={loading} />
		</React.Fragment>
	);
};

const styles = {
	icon: {
		color: "gray",
		fontSize: "2rem",
		marginRight: "1rem",
	},
	avatar: {
		width: "clamp(10px, 100%, 105px)",
		borderRadius: "50%",
	},
	horizRule: {
		width: "calc(100% + 30px)",
		borderTop: "1px solid rgba(0,0,0,.10)",
	},
	readMoreButton: {
		fontFamily: "Comfortaa",
		fontWeight: "400",
		fontSize: "20px",
		marginLeft: "5.5rem",
		width: "14rem",
		border: "none",
		backgroundImage: "linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)",
	},
};

export default Story;
