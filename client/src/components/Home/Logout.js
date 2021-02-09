import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { AuthContext } from "../../App";
import { useHistory } from "react-router-dom";

const clientId =
	"787562465084-gjkts9646p9ivqfic0knovp6135p355c.apps.googleusercontent.com";

const Logout = () => {
	const { dispatch } = useContext(AuthContext);
	const history = useHistory();

	const onSuccess = () => {
		alert("Logout made successfully");
		dispatch({
			type: "LOGOUT",
		});
		history.push("/Feed");
	};

	return (
		<div>
			<GoogleLogout
				clientId={clientId}
				buttonText="Logout"
				onLogoutSuccess={onSuccess}
			></GoogleLogout>
		</div>
	);
};

export default Logout;
