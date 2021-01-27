import React from "react";
import PageViewLayout from "./PageViewLayout";
import MainFeed from "./readComponents/MainFeed";

const TestLayout = (props) => {
	const body = (
		<div>
			<p>This is a test body!</p>
		</div>
	);
	return (
		<React.Fragment>
			<PageViewLayout body={<MainFeed />} />
		</React.Fragment>
	);
};

export default TestLayout;
