import React from "react";
import { Row, Col, Button } from "reactstrap";

const Sidebar = () => {
	return (
		<React.Fragment>
			<Row className="flex-column sidebar h-100 d-none d-lg-block">
				<Col className="text-center px-0">
					<div>
						<img
							src="/images/Ellipse2.png"
							style={styles.avatar}
							alt="avatar"
						/>
						<h1 className="mt-4" style={styles.text}>
							Maria
						</h1>
						<h6>BOSTON, MA</h6>
						<Button
							className="mt-3 text-center"
							style={styles.button}
						>
							<p className="mb-0">The </p>
							<p className="mb-0">McCarthy's</p>
						</Button>
					</div>
				</Col>
			</Row>
		</React.Fragment>
	);
};

const styles = {
	avatar: {
		width: "150px",
		marginTop: "100px",
	},
	text: {
		fontFamily: "Comfortaa",
		// fontSize: "clamp(40px, 8vw, 100px)",
	},
	button: {
		backgroundColor: "black",
		height: "57px",
		width: "140px",
		borderRadius: "8px",
		// border: "1px solid #000000",
		fontFamily: "Roboto",
		fontSize: "18px",
		fontWeight: "bold",
		lineHeight: "19.11px",
		letterSpacing: "0.09em",
		wordWrap: "break-all",
		textWidth: "1em",
	},
};

export default Sidebar;
