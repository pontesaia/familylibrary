import React from "react";
import FamilyViewLayout from "./FamilyViewLayout";
import Contact from "../Home/Contact";

const FamilyViewContact = () => {
	return (
		<React.Fragment>
			<FamilyViewLayout body={<Contact />} />
		</React.Fragment>
	);
};

export default FamilyViewContact;
