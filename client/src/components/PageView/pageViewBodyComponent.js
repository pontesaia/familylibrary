import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import ReactQuill from "react-quill";

import DB from "./../../db.json";

class PageViewBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readFlag: true,
			writeFlag: false,
		};
	}

	toggleRead = () => {
		this.setState({
			writeFlag: false,
			readFlag: !this.state.readFlag,
			// profiles: [],
			// title: "",
			// author: "",
			// story: "",
			// editorHtml: "",
			// titles: [],
			// authors: [],
			// stories: [],
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
	onChangeAuthor = (e) => {
		this.setState({
			author: e.target.value,
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
			author: this.state.author,
			story: this.state.story,
		};
		// console.log(userStory);
		// window.location = "/";
		axios
			.post("http://localhost:5000/userStories/add", userStory)
			.then((res) => console.log(res.data));
	};

	buildFakeUserInfo() {
		//get random user info
		axios
			.get("https://randomuser.me/api/?results=10")
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

	componentDidMount() {
		//builder fake users
		this.buildFakeUserInfo();

		//get userStories
		axios
			.get("http://localhost:5000/userStories")
			.then((response) => {
				if (response.data.length > 0) {
					this.setState({
						titles: response.data.map(
							(userStory) => userStory.title
						),
						authors: response.data.map(
							(userStory) => userStory.author
						),
						stories: response.data.map(
							(userStory) => userStory.story
						),
					});
					// console.log(this.state.titles);
					// console.log(this.state.authors);
					// console.log(this.state.stories);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		let renderData;
		let data = [];
		for (let i = 0; i < 10; ++i) {
			data.push({ id: i });
		}

		if (this.state.readFlag && this.state.profiles) {
			renderData = DB.userstories.map((d, i) => (
				<span key={d.id}>
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
										__html: this.state.stories[i],
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
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Author</label>
						<input
							required
							className="form-control"
							value={this.state.author || ""}
							onChange={this.onChangeAuthor}
						></input>
					</div>
					<div className="form-group">
						<label>Title of Story</label>
						<input
							required
							className="form-control"
							value={this.state.title || ""}
							onChange={this.onChangeTitle}
						></input>
					</div>
					<div className="form-group">
						<label>Story</label>
						{/* <textarea
							rows="10"
							cols="40"
							required
							className="form-control"
							value={this.state.story || ""}
							onChange={this.onChangeStory}
						></textarea> */}
						<ReactQuill
							className="quillApp"
							theme="snow"
							onChange={this.onChangeStory}
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
				</form>
			);
		}

		return (
			<React.Fragment>
				<Button onClick={this.toggleRead}>Read</Button>
				<Button onClick={this.toggleWrite}>Write</Button>
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
