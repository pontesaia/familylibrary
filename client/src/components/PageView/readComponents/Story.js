import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Story = ({
	currentUserStory,
	setMainFeedStoryFlag,
	setPersonalPreviewStory,
	state,
}) => {
	const { avatar, name } = state;
	const history = useHistory();
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

	const deleteStory = (id) => {
		console.log("DELETING!!!!!!!!");
		axios.delete(`/userStories/${id}`).then((res) => {
			console.log(res.data);
			if (setMainFeedStoryFlag) history.push("/Feed");
			else if (setPersonalPreviewStory) history.push("/MyStories");
			
		});
	};

	return (
		<React.Fragment>
			<hr
				className="horizRule mb-5 mt-4 px-0 mx-0"
				style={styles.horizRule}
			/>
			<Container>
				<Row className="ml-2">
					<Col xs="12" lg="1" className="pr-3 px-0 text-lg-center ">
						<img
							src={currentUserStory.avatar || avatar}
							style={styles.avatar}
							className="mb-2"
							alt="avatar"
						/>
					</Col>
					<Col xs="9" className="">
						<h5>{currentUserStory.title}</h5>
						<h6>
							<b>Posted By:</b> {currentUserStory.author || name}
						</h6>
						<h6>
							<b>Date posted:</b> {getStoryDate()}
						</h6>
					</Col>
					<Col xs="3" lg="2" className="pl-0">
						<Row className="pl-3">
							<span type="button" title="Edit">
								<i
									class="fa fa-pencil-square-o"
									aria-hidden="true"
									style={styles.icon}
								></i>
							</span>
							<span
								type="button"
								title="Delete"
								onClick={() =>
									deleteStory(currentUserStory._id)
								}
							>
								<i
									class="fa fa-trash-o"
									aria-hidden="true"
									style={styles.icon}
								></i>
							</span>
						</Row>
					</Col>
				</Row>
				<Row className="ml-4 mr-5">
					<Col xs="12" lg="11" className="px-0 offset-lg-1 mt-2 pl-1">
						<div
							dangerouslySetInnerHTML={{
								__html: currentUserStory.story,
							}}
						></div>
					</Col>
					<Button
						className="rounded-pill mt-4 mb-2"
						style={styles.readMoreButton}
						onClick={() => {
							if (setMainFeedStoryFlag)
								setMainFeedStoryFlag(false);
							else if (setPersonalPreviewStory)
								setPersonalPreviewStory(false);

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
		backgroundImage:
			"linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)",
	},
};

export default Story;
