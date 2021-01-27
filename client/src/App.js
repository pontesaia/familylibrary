import React from "react";
import "./App.css";
//import axios from "axios";

import Home from "./components/Home/Home";
// import About from "./components/aboutComponent";
// import Contact from "./components/contactComponent";
// import Features from "./components/featuresComponent";
import PageView from "./components/PageView/PageView";
// import MainFeed from "./components/PageView/readComponents/mainFeedComponent";
import FamilyView from "./components/FamilyView/FamilyView";
import TestDB from "./components/PageView/testDB/TestDB";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import TestLayout from "./components/PageView/TestLayout";
import ComposeStory from "./components/PageView/writeComponents/ComposeStory";
import MainFeed from "./components/PageView/readComponents/MainFeed";

function App() {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							// <Home response={this.state.response} />
							<Home />
						)}
					/>
					{/* <Route exact path="/about" component={About} /> */}
					{/* <Route exact path="/contact" component={Contact} /> */}
					{/* <Route exact path="/features" component={Features} /> */}
					{/* <Route
							exact
							path="/PageView"
							render={() => (
								// <PageView response={this.state.response} />
								<PageView />
							)}
						/> */}
					<Route
						exact
						path="/Feed"
						render={() => (
							// <PageView response={this.state.response} />
							// <PageView />
							<MainFeed />
						)}
					/>
					<Route
						exact
						path="/PersonalPreview"
						render={() => (
							// <PageView response={this.state.response} />
							<PageView />
						)}
					/>
					<Route
						exact
						path="/ComposeStory"
						render={() => (
							// <PageView response={this.state.response} />
							// <PageView />
							<ComposeStory />
						)}
					/>
					<Route
						exact
						path="/FamilyView/About"
						render={() => (
							// <PageView response={this.state.response} />
							<FamilyView />
						)}
					/>
					<Route
						exact
						path="/FamilyView/Contact"
						render={() => (
							// <PageView response={this.state.response} />
							<FamilyView />
						)}
					/>
					<Route
						exact
						path="/FamilyView/Features"
						render={() => (
							// <PageView response={this.state.response} />
							<FamilyView />
						)}
					/>
					<Route
						exact
						path="/TestDB"
						render={() => (
							// <PageView response={this.state.response} />
							<TestDB />
						)}
					/>
					<Route
						exact
						path="/TestLayout"
						render={() => (
							// <PageView response={this.state.response} />
							<TestLayout />
						)}
					/>

					<Redirect to="/" />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
