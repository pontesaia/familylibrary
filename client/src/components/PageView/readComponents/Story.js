import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Story = (props) => {
	const getStoryDate = () => {
		let createdAt;
		let date;
		if (props.currentUserStory) {
			createdAt = props.currentUserStory.createdAt;
			date = JSON.stringify(new Date(createdAt).toDateString());
			date = date.substring(1, date.length - 1);
		}
		return date;
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
							src={props.currentUserStory.avatar}
							style={styles.avatar}
							className="mb-2"
							alt="avatar"
						/>
					</Col>
					<Col className="">
						<h5>{props.currentUserStory.title}</h5>
						<h6>
							<b>Posted By:</b> {props.currentUserStory.author}
						</h6>
						<h6>
							<b>Date posted:</b> {getStoryDate()}
						</h6>
					</Col>
				</Row>
				<Row className="ml-4 mr-5">
					<Col xs="12" lg="11" className="px-0 offset-lg-1 mt-2 pl-1">
						<div
							dangerouslySetInnerHTML={{
								__html: props.currentUserStory.story,
							}}
						></div>
					</Col>
					<Button
						className="rounded-pill mt-4 mb-2"
						style={styles.readMoreButton}
						onClick={() => {
							if (props.setMainFeedStoryFlag)
								props.setMainFeedStoryFlag(false);
							else if (props.setPersonalPreviewStory)
								props.setPersonalPreviewStory(false);

							// this.getCurrentUserStory(
							// 	DB.mystories[i]
							// );
							// this.props.setPersonalPreviewStory(
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
