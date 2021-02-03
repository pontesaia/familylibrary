import React from "react";
import { Container, Button } from "reactstrap";
import axios from "axios";
import DB from "./testDB.json";

const TestDB = () => {
	const loadDB = () => {
		// e.preventDefault();
		// const userStory = {
		// 	title: this.state.title,
		// 	story: this.state.story,
		// };
		// console.log(userStory);
		// window.location = "/PageView";
		console.log(DB);
		console.log(typeof DB);
		axios
			.post("/userStories", DB.userstories)
			.then((res) => console.log(res.data));
	};

	const deleteDB = () => {
		axios.delete("/userStories").then((res) => {
			console.log(res.data);
		});
	};

	console.log(DB);
	return (
		<React.Fragment>
			<Container className="mt-5 pt-5 text-center">
				<Button onClick={deleteDB}>Delete DB</Button>
				<Button onClick={loadDB}>Load DB</Button>
			</Container>
		</React.Fragment>
	);
};

export default TestDB;
