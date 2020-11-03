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
        <Container>
          <Row>Features</Row>
          <Row>
            <Col className="text-left">
              <Row>
                <Col>
                  <p>
                    <span>
                      <img
                        style={styles.icons}
                        src="/images/earth.svg"
                        alt="holding hands icon"
                        height="24px"
                      />
                    </span>
                    (account icon)Archive family stories, histories, memories,
                    photos, videos and recipes in secure family group accounts.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span>
                      <img
                        style={styles.icons}
                        src="/images/earth.svg"
                        alt="holding hands icon"
                        height="24px"
                      />
                    </span>
                    (road icon)Follow stories of family heritage and legacies,
                    or add your own families' journey.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* <Row>
            <Col>
              <Row>
                <Col>
                  <p>
                    <span>
                      <img
                        style={styles.icons}
                        src="/images/earth.svg"
                        alt="holding hands icon"
                        height="24px"
                      />
                    </span>
                    (safety icon)Keep family folklore in a sacred space where
                    safety-checked content is posted for families to enjoy.
                  </p>
                </Col>
              </Row>

              <Row>
            <Col>
              <Row>
                <Col>
                  <p>
                      <span>
                        <img
                          style={styles.icons}
                          src="/images/earth.svg"
                          alt="holding hands icon"
                          height="24px"
                        />
                      </span>
                      (images icon)Preserve those curated daily visuals that you
                      text to mom, dad, and siblings.
                     </p>
                </Col>
                </Row>
              
            </Col>
         

                  <Col>
                    <p>
                      <span>
                        <img
                          style={styles.icons}
                          src="/images/earth.svg"
                          alt="holding hands icon"
                          height="24px"
                        />
                      </span>
                      (movies icon)Tag content for creating family movies for
                      online get-togethers.
                    </p>
                  </Col>
                </Row>
              </Col> */}

          {/* <Col>
                <Row>
                  <Col>
                    <p>
                      <span>
                        <img
                          style={styles.icons}
                          src="/images/earth.svg"
                          alt="holding hands icon"
                          height="24px"
                        />
                      </span>
                      (groups icon)Join Family Groups where you can browse or
                      post on multiple family lineages.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row> */}
        </Container>
      </React.Fragment>
    );
  }
}

const styles = {
  header: {
    color: "black",
    fontSize: "2rem",
    marginLeft: "1rem",
    fontFamily: "Comfortaa",
  },
  icons: {
    paddingRight: ".5rem",
  },
};

export default Features;
