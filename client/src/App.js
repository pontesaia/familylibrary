import React, { useReducer } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import FamilyViewAbout from "./components/FamilyView/FamilyViewAbout";
import FamilyViewContact from "./components/FamilyView/FamilyViewContact";
import FamilyViewFeatures from "./components/FamilyView/FamilyViewFeatures";
import TestDB from "./components/PageView/testDB/TestDB";
import Login from "./components/Home/OAuthLogin";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ComposeStory from "./components/PageView/writeComponents/ComposeStory";
import MainFeed from "./components/PageView/readComponents/MainFeed";
import PersonalFeedPreview from "./components/PageView/readComponents/PersonalFeed";
import Logout from "./components/Home/Logout";
import Story from "./components/PageView/readComponents/Story"

export const AuthContext = React.createContext();

const initialAuthContext = {
	isAuthenticated: sessionStorage.getItem("google-token") ? true : false,
	googleToken: sessionStorage.getItem("google-token") || null,
	userId: sessionStorage.getItem("userId") || null,
	avatar: sessionStorage.getItem("avatar") || null,
	name: sessionStorage.getItem("name") || null,
	givenName: sessionStorage.getItem("givenName") || null,
	familyName: sessionStorage.getItem("familyName") || null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			// sessionStorage.setItem("isAuthenticated", action.payload.isAuthenticated);
			sessionStorage.setItem("google-token", action.payload.authToken);
			sessionStorage.setItem("userId", action.payload.id);
			sessionStorage.setItem("name", action.payload.name);
			sessionStorage.setItem("avatar", action.payload.avatar);
			sessionStorage.setItem("givenName", action.payload.givenName);
			sessionStorage.setItem("familyName", action.payload.familyName);
			return {
				...state,
				isAuthenticated: action.payload.isAuthenticated,
				googleToken: action.payload.authToken,
				userId: action.payload.id,
				name: action.payload.name,
				avatar: action.payload.avatar,
				givenName: action.payload.givenName,
				familyName: action.payload.familyName,
			};
		case "LOGOUT":
			sessionStorage.clear();
			return {
				...state,
				isAuthenticated: false,
				googleToken: null,
				userId: null,
				name: null,
				avatar: null,
				givenName: null,
				familyName: null,
			};
		default:
			return state;
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialAuthContext);
	return (
		<BrowserRouter>
			<React.Fragment>
				<AuthContext.Provider value={{ state, dispatch }}>
					{/* <h1>{state.name}</h1>
					<img src={state.avatar} /> */}
					{state.isAuthenticated ? (
						<Switch>
							<Route exact path="/" render={() => <Home />} />
							<Route
								exact
								path="/Login"
								render={() => <Login />}
							/>
							<Route
								exact
								path="/Logout"
								render={() => <Logout />}
							/>
							<Route
								exact
								path="/Feed"
								render={() => <MainFeed state={state} />}
							/>
							<Route
								exact
								path="/MyStories"
								render={() => (
									<PersonalFeedPreview state={state} />
								)}
							/>
							<Route
								exact
								path="/MyStories/userStory/:id"
								render={() => (
									<Story state={state} />
								)}
							/>
							<Route
								exact
								path="/ComposeStory"
								render={() => <ComposeStory state={state} />}
							/>
							<Route
								exact
								path="/FamilyView/About"
								render={() => <FamilyViewAbout />}
							/>
							<Route
								exact
								path="/FamilyView/Contact"
								render={() => <FamilyViewContact />}
							/>
							<Route
								exact
								path="/FamilyView/Features"
								render={() => <FamilyViewFeatures />}
							/>
							<Route
								exact
								path="/TestDB"
								render={() => <TestDB />}
							/>
							<Redirect to="/" />
						</Switch>
					) : (
						<Switch>
							<Route exact path="/" render={() => <Home />} />
							<Route
								exact
								path="/Login"
								render={() => <Login />}
							/>
							<Redirect to="/" />
						</Switch>
					)}
				</AuthContext.Provider>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
