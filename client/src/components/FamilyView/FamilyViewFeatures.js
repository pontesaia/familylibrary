import React from "react";
import FamilyViewLayout from "./FamilyViewLayout";
import Features from "../Home/Features";

const FamilyViewFeatures = () => {
	return (
		<React.Fragment>
			<FamilyViewLayout body={<Features />} />
		</React.Fragment>
	);
};

export default FamilyViewFeatures;
