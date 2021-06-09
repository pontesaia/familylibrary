import React from "react";
import FamilyViewLayout from "./FamilyViewLayout";
import Contact from "../Home/Contact";
import Fade from "react-reveal/Fade";


const FamilyViewContact = ({state}) => {
	return (
		<React.Fragment>
			<FamilyViewLayout
				state={state}
				body={
					<Fade bottom duration={500}>
						<Contact />
					</Fade>
				}
			/>
		</React.Fragment>
	);
};

export default FamilyViewContact;
