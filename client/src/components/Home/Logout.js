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
		// alert("Logout made successfully");
		dispatch({
			type: "LOGOUT",
		});
		// history.push("/");
	};

	return (
		<div>
			<GoogleLogout
				clientId={clientId}
				render={(renderProps) => (
					<button
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
						style={styles.btn}
					>
						Logout
					</button>
				)}
				// buttonText="Logout"
				onLogoutSuccess={onSuccess}
			></GoogleLogout>
		</div>
	);
};

const styles = {
	btn: {
		background: "none",
		color: "inherit",
		border: "none",
		padding: 0,
		font: "inherit",
		cursor: "pointer",
		outline: "inherit",
	},
};

export default Logout;
