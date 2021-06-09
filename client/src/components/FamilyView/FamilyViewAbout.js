import React from "react";
import FamilyViewLayout from "./FamilyViewLayout";
import About from "../Home/About";
import Fade from "react-reveal/Fade";

const FamilyViewAbout = ({state}) => {
	return (
		<React.Fragment>
			<FamilyViewLayout
				state={state}
				body={
					<Fade bottom duration={500}>
						<About />
					</Fade>
				}
			/>
		</React.Fragment>
	);
};

export default FamilyViewAbout;
