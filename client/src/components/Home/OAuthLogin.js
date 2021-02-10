import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./refreshTokenSetup";
import { AuthContext } from "../../App";
import { useHistory } from "react-router-dom";
import axios from "axios";

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

			const data = {
				_id: res.googleId,
				name: res.profileObj.name,
				givenName: res.profileObj.givenName,
				familyName: res.profileObj.familyName,
				avatar: res.profileObj.imageUrl,
			};
			setUser(data);
			// getUser(res.googleId, data)
			// if (!getUser(res.googleId)) setUser(data);
			// let data2 = getUser(res.googleId);
			// console.log("This is the data!!!" , data2)
			history.push("/Feed");
		}

		refreshTokenSetup(res);
	};

	const onFailure = (res) => {
		console.log("[Login failed] res: ", res);
	};

	const setUser = (data) => {
		axios
			.post("/user", data)
			.then((res) => console.log("THIS IS IT!!!", res.data));
	};

	const getUser = async (userId, data) => {
		axios
			.get(`/user/${userId}`)
			.then((response) => {
				console.log(response);
				// return response;
				// if(!response.userId) setUser(data)
			})
			.catch((error) => {
				console.log(error);
			});
		
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
