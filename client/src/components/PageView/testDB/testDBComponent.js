import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import axios from "axios";
import DB from "./testDB.json";

class TestDB extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	loadDB = () => {
		// e.preventDefault();
		// const userStory = {
		// 	title: this.state.title,
		// 	story: this.state.story,
		// };
		// console.log(userStory);
        // window.location = "/PageView";
        console.log(DB);
        console.log(typeof DB)
		axios.post("/userStories", DB.userstories).then((res) => console.log(res.data));
	};

	deleteDB = () => {
		axios.delete("/userStories").then((res) => {
			console.log(res.data);
		});
	};

	render() {
		console.log(DB);
		return (
			<React.Fragment>
				<Container className="mt-5 pt-5 text-center">
					<Button onClick={this.deleteDB}>Delete DB</Button>
					<Button onClick={this.loadDB}>Load DB</Button>
				</Container>
			</React.Fragment>
		);
	}
}

export default TestDB;
