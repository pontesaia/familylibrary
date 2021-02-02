import React from "react";
import FamilyViewLayout from "./FamilyViewLayout";
import About from "../Home/About";

const FamilyViewAbout = () => {
	return (
		<React.Fragment>
			<FamilyViewLayout body={<About />} />
		</React.Fragment>
	);
};

export default FamilyViewAbout;
