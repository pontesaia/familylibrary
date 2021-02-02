import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import FamilyViewAbout from "./components/FamilyView/FamilyViewAbout"
import FamilyViewContact from "./components/FamilyView/FamilyViewContact";
import FamilyViewFeatures from "./components/FamilyView/FamilyViewFeatures";
import TestDB from "./components/PageView/testDB/TestDB";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ComposeStory from "./components/PageView/writeComponents/ComposeStory";
import MainFeed from "./components/PageView/readComponents/MainFeed";
import PersonalFeedPreview from "./components/PageView/readComponents/PersonalFeedPreview";

function App() {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Home />
						)}
					/>
					<Route
						exact
						path="/Feed"
						render={() => (
							<MainFeed />
						)}
					/>
					<Route
						exact
						path="/MyStories"
						render={() => (
							<PersonalFeedPreview />
						)}
					/>
					<Route
						exact
						path="/ComposeStory"
						render={() => (
							<ComposeStory />
						)}
					/>
					<Route
						exact
						path="/FamilyView/About"
						render={() => (
							<FamilyViewAbout />
						)}
					/>
					<Route
						exact
						path="/FamilyView/Contact"
						render={() => (
							<FamilyViewContact />
						)}
					/>
					<Route
						exact
						path="/FamilyView/Features"
						render={() => (
							<FamilyViewFeatures />
						)}
					/>
					<Route
						exact
						path="/TestDB"
						render={() => (
							<TestDB />
						)}
					/>
					<Redirect to="/" />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
