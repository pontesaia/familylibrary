import React from "react";
import "./App.css";
import Home from "./components/homeComponent";
import About from "./components/aboutComponent";
import Contact from "./components/contactComponent";
import Features from "./components/featuresComponent";

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
					<Redirect to="/" />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
