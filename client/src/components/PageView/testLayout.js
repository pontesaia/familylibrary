import React from "react";
import PageViewLayout from "./PageViewLayout";


const TestLayout = (props) => {
    const body = (<div><p>This is a test body!</p></div>)
	return (
		<React.Fragment>
            <PageViewLayout body={body}/>
		</React.Fragment>
	);
};

export default TestLayout;
