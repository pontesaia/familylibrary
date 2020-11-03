import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Container className="componentContainer">
          <Row>
            <Col className="text-left mt-4">
              <h1 style={styles.header}>About</h1>
            </Col>
          </Row>
          <Row className="text-left mt-4">
            <Col xs="12" md="6">
              <p style={styles.introPara}>
                Families come in all sizes, colors, cultures and traditions!
                Families who share their values, and traditions with each
                generation are bound closer together through their common family
                histories. Reading stories written directly by family members is
                like reading letters from home. These personal memories offer
                perspectives on “Who’s who”, and the “Why’s” and the “When’s” of
                family life. Family Library offers a convenient way to share
                precious family stories with family members no matter where they
                are in the world. Get started and invite your family today!
              </p>
            </Col>
            <Col xs="12" md="3">
              <Row>
                <Col>
                  <p style={styles.imageBullets}>
                    <span class="backgroundCircle">
                      <img
                        style={styles.icons}
                        src="/images/earth.svg"
                        alt="holding hands icon"
                        height="24px"
                      />
                    </span>
                    Family Library brings families closer together, even when
                    separated, and memories come back to life in story form
                  </p>

                  <p style={styles.imageBullets}>
                    <span class="backgroundCircle">
                      <img
                        style={styles.icons}
                        src="/images/hand-heart.svg"
                        alt="multiple hearts icon"
                        height="24px"
                      />
                    </span>
                    Family “members” post stories, old photos or recipes for
                    generations to enjoy.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs="12" md="3" className="mb-5">
              <Row>
                <Col>
                  <p style={styles.imageBullets}>
                    <span class="backgroundCircle">
                      <img
                        style={styles.icons}
                        src="/images/book-edit-outline.svg"
                        alt="holding hands icon"
                        height="24px"
                      />
                    </span>
                    Browse, read, export, print, or share, via email, links to
                    those special family events and milestones
                  </p>

                  <p style={styles.imageBullets}>
                    <span class="backgroundCircle">
                      <img
                        style={styles.icons}
                        src="/images/human-queue.svg"
                        alt="holding hands icon"
                        height="24px"
                      />
                    </span>
                    Memories of precious “old time” family photo albums, letters
                    from Grandpa, or family favorite recipes!
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr></hr>
        </Container>
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
    // paddingRight: ".5rem",
    paddingLeft: "4px",
    paddingBottom: "3px",
  },
  introPara: {
    fontSize: "1.1rem",
    lineHeight: "30px",
  },
  imageBullets: {
    lineHeight: "30px",
  },
};
export default About;

//this.onclick={this.props.toggleAboutBar}
