import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import ReactQuill from "react-quill";

import DB from "./../../db.json";

class PageViewBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readFlag: false,
			writeFlag: true,
			preview: false,
			stories: [],
		};
	}

	toggleRead = () => {
		this.setState({
			writeFlag: false,
			readFlag: !this.state.readFlag,
		});
	};

	toggleWrite = () => {
		this.setState({ readFlag: false, writeFlag: !this.state.writeFlag });
	};

	onChangeTitle = (e) => {
		this.setState({
			title: e.target.value,
		});
	};
	onChangeStory = (html) => {
		this.setState({
			story: html,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const userStory = {
			title: this.state.title,
			story: this.state.story,
		};
		// console.log(userStory);
		// window.location = "/";
		axios
			.post("http://localhost:5000/userStories", userStory)
			.then((res) => console.log(res.data));
	};

	buildFakeUserInfo() {
		//get random user info
		axios
			.get("https://randomuser.me/api/?results=11", { crossdomain: true })
			.then((response) => {
				if (response.data) {
					// const img = response.data.results[0].picture.large;
					this.setState({
						profiles: response.data.results,
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	getUserStories() {
		//get userStories
		axios
			.get("http://localhost:5000/userStories")
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
					// console.log(this.state.titles);
					// console.log(this.state.stories);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	editUserStories() {

	}

	deleteUserStories() {

	}

	trimString(str, length) {
		if (str && str.length > length)
			return str.substring(0, length) + ".....";
		else return str;
	}

	componentDidMount() {
		//builder fake users
		this.buildFakeUserInfo();
		this.getUserStories();
	}

	render() {
		let renderData;
		let data = [];
		for (let i = 0; i < 11; ++i) {
			data.push({ id: i });
		}

		if (this.state.readFlag && this.state.profiles && this.state.userStories) {
			// this.getUserStories();
			renderData = DB.userstories.map((d, i) => (
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
								className="pr-2 px-0 text-lg-center"
							>
								<img
									// src="/images/Ellipse2.png"
									src={this.state.profiles[i].picture.large}
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
									{this.state.profiles[i].name.first}{" "}
									{this.state.profiles[i].name.last}
								</h6>
								<h6>Date posted: {d.date}</h6>
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
										__html: this.state.userStories[i].story,
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
			// console.log(renderData)
			// renderData = renderData.replace(/\n/g, "<br />");
		} else if (this.state.writeFlag) {
			renderData = (
				<Container>
					<hr
						className="horizRule mb-5 mt-4 px-0 mx-0"
						style={styles.horizRule}
					/>
					<form onSubmit={this.onSubmit}>
						{/* <Row>
							<Col xs="6">
								<div className="form-group">
									<label>Author</label>
									<input
										required
										className="form-control"
										value={this.state.author || ""}
										onChange={this.onChangeAuthor}
									></input>
								</div>
							</Col>
						</Row> */}
						<Row>
							<Col
								xs="12"
								lg="1"
								className="pr-2 px-0 text-lg-center"
							>
								<img
									src="/images/Ellipse2.png"
									style={styles.avatar}
									className="mb-2"
									alt="avatar"
								/>
							</Col>
							<Col xs="10">
								<div className="form-group">
									<label style={{ fontWeight: "700" }}>
										Title of Story
									</label>
									<input
										required
										className="form-control"
										value={this.state.title || ""}
										onChange={this.onChangeTitle}
										placeholder={
											"Enter Title of Family Story Here..."
										}
									></input>
								</div>
							</Col>
						</Row>
						<Row>
							<Col xs="10" className="offset-sm-1">
								<div className="form-group">
									<label style={{ fontWeight: "700" }}>
										Family Story
									</label>
									<ReactQuill
										className="quillApp"
										theme="snow"
										onChange={this.onChangeStory}
										placeholder={"Write your story..."}
										// value={this.state.editorHtml}
										modules={PageViewBody.modules}
										formats={PageViewBody.formats}
									/>
								</div>
								<div className="form-group">
									{/* <input type="submit" className="btn btn-primary" /> */}
									<Button
										onClick={this.onSubmit}
										type="button"
										className="btn btn-primary"
									>
										Submit
									</Button>
								</div>
							</Col>
						</Row>
					</form>
					<hr
						className="horizRule mb-5 mt-4 px-0 mx-0"
						style={styles.horizRule}
					/>
				</Container>
			);
		} else if (this.state.preview && this.state.profiles) {
			// console.log(typeof this.state.stories[0]);
			renderData = DB.userstories.map((d, i) => (
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
								className="pr-2 px-0 text-lg-center"
							>
								<img
									// src="/images/Ellipse2.png"
									src={this.state.profiles[i].picture.large}
									style={styles.avatar}
									className="mb-2"
									alt="avatar"
								/>
							</Col>
							<Col xs="12" lg="3" className="px-0">
								<h4>{d.title}</h4>
								{/* <h6>Posted By: {d.author}</h6> */}
								<h6>
									Posted By:{" "}
									{this.state.profiles[i].name.first}{" "}
									{this.state.profiles[i].name.last}
								</h6>
								<h6>Date posted: {d.date}</h6>
								<h6 className="mb-4">{d.tags}</h6>
							</Col>
							<Col xs="12" lg="7" className="pl-0 mb-2 pr-4">
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
											this.state.userStories[i].story,
											450
										),
									}}
								></div>
								{/* <Button
												className="rounded-pill m-0"
												style={styles.readMoreButton}
											>
												<span>read more...</span>
											</Button> */}
							</Col>
							<Col xs="12" lg="1" className="pl-0">
								<Row className="pl-3">
									<span
										type="button"
										title="Edit"
										// onCLick={this.clickFunctionHere}
									>
										<i
											className="fa fa-pencil-square-o fa-2x mr-3"
											style={styles.icons}
										></i>
									</span>
									<span
										type="button"
										title="Delete"
										// onCLick={this.clickFunctionHere}
									>
										<i
											className="fa fa-trash-o fa-2x"
											style={styles.icons}
										></i>
									</span>
								</Row>
							</Col>
						</Row>
					</Container>
				</span>
			));
		}

		return (
			<React.Fragment>
				{/* <Button onClick={this.toggleRead}>Read</Button> */}
				{/* <Button onClick={this.toggleWrite}>Write</Button> */}
				<div className="pb-4">{renderData}</div>
			</React.Fragment>
		);
	}
}

const styles = {
	search: {
		paddingBottom: "100px",
	},
	avatar: {
		// width: "105px",
		width: "clamp(10px, 100%, 105px)",
		borderRadius: "50%",
		// float: "none",
		// marginLeft: "auto",
		// marginRight: "auto"
		// textAlign: "center",
		// display: "block",
		// marginRight: "auto",
		// paddingLeft: "10px"
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
	icons: {
		color: "gray",
	},
};

//Quill stuff
PageViewBody.modules = {
	toolbar: [
		// [{ header: "1" }, { header: "2" }, { font: [] }],
		[{ header: "1" }, { header: "2" }],
		[{ size: [] }],
		// ["bold", "italic", "underline", "strike", "blockquote"],
		["bold", "italic", "underline", "strike"],
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" },
		],
		["link", "image", "video"],
		["clean"],
	],
	clipboard: {
		// toggle to add extra line breaks when pasting HTML:
		matchVisual: false,
	},
};

PageViewBody.formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	// "blockquote",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
	"video",
];

export default PageViewBody;
