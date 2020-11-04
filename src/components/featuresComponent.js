import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
		<React.Fragment>
			<div className="componentContainer">
				<Container>
					<Row>
						<Col className="text-left mt-4">
							<h1 style={styles.header}>Features</h1>
						</Col>
					</Row>
					<Row className="text-left mt-4">
						<Col xs="12" sm="6" md="3">
							<p style={styles.imageBullets}>
								<span class="backgroundCircle">
									<img
										style={styles.icons}
										src="/images/account-circle.svg"
										alt="family account"
										height="24px"
									/>
								</span>
								Archive family stories, histories, memories,
								photos, videos and recipes in secure family
								group accounts.
							</p>
						</Col>
						<Col xs="12" sm="6" md="3">
							<p style={styles.imageBullets}>
								<span class="backgroundCircle">
									<img
										style={styles.icons}
										src="/images/highway.svg"
										alt="family journey"
										height="24px"
									/>
								</span>
								Follow stories of family heritage and legacies,
								or add your own families' journey.
							</p>
						</Col>
						<Col xs="12" sm="6" md="3">
							<p style={styles.imageBullets}>
								<span class="backgroundCircle">
									<img
										style={styles.icons}
										src="/images/baby-carriage.svg"
										alt="safe place"
										height="24px"
									/>
								</span>
								Keep family folklore in a sacred space where
								safety-checked content is posted for families to
								enjoy.
							</p>
						</Col>
						<Col xs="12" sm="6" md="3">
							<p style={styles.imageBullets}>
								<span class="backgroundCircle">
									<img
										style={styles.icons}
										src="/images/human-female-boy.svg"
										alt="siblings"
										height="24px"
									/>
								</span>
								Preserve those curated daily visuals that you
								text to mom, dad, and siblings.
							</p>
						</Col>
					</Row>
					<Row>
						<Col xs="12" sm="6" md="3">
							<p style={styles.imageBullets}>
								<span class="backgroundCircle">
									<img
										style={styles.icons}
										src="/images/badge-account-horizontal.svg"
										alt="badges"
										height="24px"
									/>
								</span>
								Tag content for creating family movies for
								online get-togethers.
							</p>
						</Col>
						<Col xs="12" sm="6" md="3">
							<p style={styles.imageBullets}>
								<span class="backgroundCircle">
									<img
										style={styles.icons}
										src="/images/human-queue.svg"
										alt="families"
										height="24px"
									/>
								</span>
								Join Family Groups where you can browse or post
								on multiple family lineages.
							</p>
						</Col>
						<Col xs="12" sm="6" md="3">
							<p style={styles.imageBullets}>
								<span class="backgroundCircle">
									<img
										style={styles.icons}
										src="/images/human-male-girl.svg"
										alt="lineages"
										height="24px"
									/>
								</span>
								Exporting for creating those wonderful
								story-books or family-photo-books for
								gift-giving.
							</p>
						</Col>
						<Col xs="12" sm="6" md="3" className="mb-5">
							<p style={styles.imageBullets}>
								<span class="backgroundCircle">
									<img
										style={styles.icons}
										src="/images/human-male-child.svg"
										alt="relatives"
										height="24px"
									/>
								</span>
								Share your favorites stories via email by
								sending invitations to family members.
							</p>
						</Col>
					</Row>
					<hr></hr>
				</Container>
			</div>
		</React.Fragment>
	);
  }
}

const styles = {
  header: {
    color: "black",
    fontSize: "2rem",
    // marginLeft: "1rem",
    fontFamily: "Comfortaa",
  },
  icons: {
    paddingLeft: "4px",
    paddingBottom: "3px",
  },
  introPara: {
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
  },
  imageBullets: {
    lineHeight: "30px",
  },
};

export default Features;
