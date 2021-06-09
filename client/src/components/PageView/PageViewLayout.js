import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";

import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import Search from "./Search";

const PageViewLayout = ({ body, state, loading }) => {
	let renderData = loading ? (
		<Container>
			<Row>
				<Col style={styles.spinner}>
					<Spinner
						color="secondary"
						style={{ width: "8rem", height: "8rem" }}
					/>
				</Col>
			</Row>
		</Container>
	) : (
		body
	);
	return (
		<React.Fragment>
			<Container
				fluid
				className="d-flex flex-column vh-100 overflow-hidden"
			>
				<Row>
					<Col className="px-0">
						<TopNav state={state} />
					</Col>
				</Row>
				<Row className="flex-grow-1 overflow-hidden">
					<Col
						xs="0"
						lg="2"
						className="mh-100 overflow-auto"
						style={styles.sidebar}
					>
						<Sidebar state={state} />
					</Col>

					<Col
						xs="12"
						lg="10"
						className="mh-100 px-0"
						style={styles.mainBody}
					>
						<Row className="flex-grow-1">
							<Col className="mh-100 pt-5">
								<Row className="m-2">
									<Col className="offset-lg-1 p-0">
										<Search state={state}/>
									</Col>
								</Row>
								{renderData}
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className="flex-shrink-0 mt-5 pt-5">
					<Col xs="12" className="px-0 pt-1" styles={styles.footer}>
						<BottomNav />
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

const styles = {
	footer: { position: "fixed", left: "0", bottom: "0", width: "100%" },
	mainBody: { overflowY: "auto", overflowX: "hidden" },
	sidebar: { borderRight: "1px solid rgba(0, 0, 0, 0.1)" },
	spinner: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "calc(100vh/2)",
	},
};

export default PageViewLayout;
