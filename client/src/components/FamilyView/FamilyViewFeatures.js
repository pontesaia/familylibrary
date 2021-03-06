import React from "react";
import FamilyViewLayout from "./FamilyViewLayout";
import Features from "../Home/Features";
import Fade from "react-reveal/Fade";

const FamilyViewFeatures = () => {
	return (
		<React.Fragment>
			<FamilyViewLayout
				body={
					<Fade bottom duration={500}>
						<Features />
					</Fade>
				}
			/>
		</React.Fragment>
	);
};

export default FamilyViewFeatures;
