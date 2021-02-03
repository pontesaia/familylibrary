import React from "react";
import { GoogleLogin } from "react-google-login";
import Login from "./Login";

const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

const OAuthLogin = () => {
	const onSuccess = (res) => {
		console.log("[Login Sucess] currentUser:", res.profileObj);
	};

	const onFailure = (res) => {
		console.log("[Login failed] res: ", res);
	};

	return (
		<div>
			<GoogleLogin clientId={clientId} buttonText="Login" />
		</div>
	);
};

export default Login;
