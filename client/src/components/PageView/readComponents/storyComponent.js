import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

class Story extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getStoryDate() {
		let createdAt;
		let date;
		if (this.props.currentUserStory) {
			createdAt = this.props.currentUserStory.createdAt;
			date = JSON.stringify(new Date(createdAt).toDateString());
			date = date.substring(1, date.length - 1);
		}
		return date;
	}

	render() {
		return (
			<React.Fragment>
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
								src={this.props.currentUserStory.avatar}
								style={styles.avatar}
								className="mb-2"
								alt="avatar"
							/>
						</Col>
						<Col className="px-0">
							{/* <h4>{d.title}</h4> */}
							{/* <h6>Posted By: {d.author}</h6> */}
							<h6>
								Posted By:{" "}
								{/* {this.props.profiles[i].name.first}{" "} */}
								{/* {this.props.profiles[i].name.last} */}
								{this.props.currentUserStory.author}
							</h6>
							<h6>Date posted: {this.getStoryDate()}</h6>
							{/* <h6 className="mb-4">{d.tags}</h6> */}
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
									__html: this.props.currentUserStory.story,
								}}
							></div>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

const styles = {
	avatar: {
		width: "clamp(10px, 100%, 105px)",
		borderRadius: "50%",
	},
};

export default Story;
