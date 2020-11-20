import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Home from "./components/Home/homeComponent";
// import About from "./components/aboutComponent";
// import Contact from "./components/contactComponent";
// import Features from "./components/featuresComponent";
import PageView from "./components/PageView/pageViewComponent";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: {},
		};
	}

	componentDidMount() {
		// axios.get("/api/v1/say-something").then((res) => {
		// 	const response = res.data;
		// 	this.setState({ response });
		// });
	}

	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Home response={this.state.response} />
							)}
						/>
						{/* <Route exact path="/about" component={About} /> */}
						{/* <Route exact path="/contact" component={Contact} /> */}
						{/* <Route exact path="/features" component={Features} /> */}
						<Route
							exact
							path="/pageView"
							render={() => (
								<PageView response={this.state.response} />
							)}
						/>

						<Redirect to="/" />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
