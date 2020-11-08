import React from "react";
import "./App.css";
import Home from "./components/Home/homeComponent";
// import About from "./components/aboutComponent";
// import Contact from "./components/contactComponent";
// import Features from "./components/featuresComponent";
import PageView from "./components/PageView/pageViewComponent";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Home} />
					{/* <Route exact path="/about" component={About} /> */}
					{/* <Route exact path="/contact" component={Contact} /> */}
					{/* <Route exact path="/features" component={Features} /> */}
					<Route exact path="/pageView" component={PageView} />

					<Redirect to="/" />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
