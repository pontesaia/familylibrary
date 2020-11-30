import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import DB from "./../../../db.json";

class PersonalFeedPreview extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	trimString(str, length) {
		if (str && str.length > length)
			return str.substring(0, length) + ".....";
		else return str;
	}

	getStoryDate(i) {
		let createdAt;
		let date;
		if (this.props.userStories) {
			createdAt = this.props.userStories[i].createdAt;
			date = JSON.stringify(new Date(createdAt).toDateString());
			date = date.substring(1, date.length - 1);
		}
		return date;
	}

	render() {
		let renderData = null;
		if (this.props.userStories)
			renderData = this.props.userStories.map((d, i) => (
				<span key={this.props.userStories[i]._id}>
					<hr
						className="horizRule mb-5 mt-4 px-0 mx-0"
						style={styles.horizRule}
					/>
					<Container>
						<Row className="ml-2">
							<Col
								xs="12"
								lg="1"
								className="pr-2 px-0 text-lg-center"
							>
								<img
									// src="/images/Ellipse2.png"
									// src={this.props.profiles[i].picture.large}
									src={this.props.userStories[i].avatar}
									style={styles.avatar}
									className="mb-2"
									alt="avatar"
								/>
							</Col>
							<Col className="px-0">
								<h4>{d.title}</h4>
								{/* <h6>Posted By: {d.author}</h6> */}
								<h6>
									Posted By:{" "}
									{/* {this.props.profiles[i].name.first}{" "} */}
									{/* {this.props.profiles[i].name.last} */}
									{this.props.userStories[i].author}
								</h6>
								<h6>Date posted: {this.getStoryDate(i)}</h6>
								<h6 className="mb-4">{d.tags}</h6>
							</Col>
						</Row>
						<Row className="ml-2 mr-5">
							<Col xs="12" lg="11" className="px-0 offset-lg-1">
								{/* <div
									dangerouslySetInnerHTML={{
										__html:
											"<p>" +
											d.story.replace(/\n/g, "</p><p>"),
									}}
								></div> */}
								<div
									dangerouslySetInnerHTML={{
										__html: this.trimString(
											this.props.userStories[i].story,
											450
										),
									}}
								></div>
								<Button
									className="rounded-pill m-0"
									style={styles.readMoreButton}
								>
									<span>read more...</span>
								</Button>
							</Col>
						</Row>
					</Container>
				</span>
			));
		return <React.Fragment>{renderData}</React.Fragment>;
	}
}

const styles = {
	avatar: {
		width: "clamp(10px, 100%, 105px)",
		borderRadius: "50%",
	},
	horizRule: {
		width: "calc(100% + 30px)",
		borderTop: "2px solid rgba(0,0,0,.15)",
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
