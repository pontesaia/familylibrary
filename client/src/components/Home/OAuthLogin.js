import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./refreshTokenSetup";
import { AuthContext } from "../../App";
import { useHistory } from "react-router-dom";

const path = require("path");

require("dotenv").config();

// const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const clientId =
	"787562465084-gjkts9646p9ivqfic0knovp6135p355c.apps.googleusercontent.com";

const OAuthLogin = () => {
	const { dispatch } = useContext(AuthContext);
	const history = useHistory();

	const onSuccess = (res) => {
		console.log("[Login Sucess] currentUser: ");
		console.log(res.profileObj);

		if (res.accessToken) {
			dispatch({
				type: "LOGIN",
				payload: {
					isAuthenticated: true,
					authToken: res.accessToken,
					id: res.googleId,
					name: res.profileObj.name,
					avatar: res.profileObj.imageUrl,
					givenName: res.profileObj.givenName,
					familyName: res.profileObj.familyName,
				},
			});
			history.push("/Feed");
		}

		refreshTokenSetup(res);
	};

	const onFailure = (res) => {
		console.log("[Login failed] res: ", res);
	};

	return (
		<div>
			<GoogleLogin
				clientId={clientId}
				buttonText="Log in with Google"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
				style={{ marginTop: "100px" }}
				isSignedIn={true}
			/>
		</div>
	);
};

export default OAuthLogin;
