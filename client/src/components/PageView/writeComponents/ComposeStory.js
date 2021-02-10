import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ReactQuill from "react-quill";
import axios from "axios";
import PageViewLayout from "../PageViewLayout";
import { Redirect } from "react-router-dom";

const ComposeStory = ({state}) => {
	const [title, setTitle] = useState("");
	const [story, setStory] = useState("");
	const [redirect, setRedirect] = useState(false);

	const onChangeTitle = (e) => {
		setTitle(e.target.value);
	};
	const onChangeStory = (html) => {
		setStory(html);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const userStory = {
			userId: state.userId,
			title: title,
			story: story,
		};
		if (title && story) {
			axios
				.post("/userStories", userStory)
				.then((res) => console.log(res.data));
			setTimeout(() => {
				setRedirect(true);
			}, 500);
		}
	};

	const renderRedirect = () => {
		if (redirect) {
			return <Redirect to="/Feed" />;
		}
	};

	let renderData = (
		<Container>
			<hr
				className="horizRule mb-5 mt-4 px-0 mx-0"
				style={styles.horizRule}
			/>
			<form onSubmit={onSubmit}>
				<Row>
					<Col xs="12" lg="1" className="pr-2 px-0 text-lg-center">
						<img
							// src="/images/Ellipse2.png"
							src={state.avatar}
							style={styles.avatar}
							className="mb-2 ml-3"
							alt="avatar"
						/>
					</Col>
					<Col xs="12" lg="11" className="pl-lg-4">
						<div className="form-group">
							<label style={{ fontWeight: "700" }}>
								Title of Story
							</label>
							<input
								required
								className="form-control"
								value={title || ""}
								onChange={onChangeTitle}
								placeholder={
									"Enter Title of Family Story Here..."
								}
							></input>
						</div>
					</Col>
				</Row>
				<Row className="offset-lg-1">
					<Col xs="12">
						<div className="form-group">
							<label style={{ fontWeight: "700" }}>
								Family Story
							</label>
							<ReactQuill
								className="quillApp"
								theme="snow"
								onChange={onChangeStory}
								placeholder={"Write your story..."}
								modules={ComposeStory.modules}
								formats={ComposeStory.formats}
							/>
						</div>
						<div className="form-group">
							{/* <input type="submit" className="btn btn-primary" /> */}
							<Button
								onClick={onSubmit}
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
	return (
		<React.Fragment>
			{renderRedirect()}
			<PageViewLayout body={renderData} state={state} />
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
};

//Quill stuff
ComposeStory.modules = {
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

ComposeStory.formats = [
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

export default ComposeStory;
