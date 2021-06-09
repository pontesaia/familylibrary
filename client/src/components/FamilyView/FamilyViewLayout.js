import { Container, Row, Col } from "reactstrap";
import React from "react";

import TopNav from "../PageView/TopNav";
import BottomNav from "../PageView/BottomNav";
import FamilyCrest from "./FamilyCrest";

const FamilyViewLayout = ({body, state}) => {
	return (
		<React.Fragment>
			<Container
				fluid
				className="d-flex flex-column vh-100 overflow-hidden"
			>
				<Row>
					<Col className="px-0">
						<TopNav state={state}/>
					</Col>
				</Row>
				<Row>
					<Col>
						<FamilyCrest state={state} />
					</Col>
				</Row>
				<Row>
					<Col className="p-0">{body}</Col>
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
};

export default FamilyViewLayout;
