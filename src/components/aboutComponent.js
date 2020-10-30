import React, { Component } from "react";

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<h1>
					This is the about component
				</h1>
			</React.Fragment>
		);
	}
}

export default About;

//this.onclick={this.props.toggleAboutBar}
