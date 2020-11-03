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
        <Container>
          <Row>
            <h1 style={styles.header}>About</h1>
          </Row>
          <Row className="text-left mt-4">
            <Col>
              <p>
                Families come in all sizes, colors, cultures and traditions!
                Families who share their values, and traditions with each
                generation are bound closer together through their common family
                histories. Reading stories written directly by family members is
                like reading letters from home. These personal memories offer
                perspectives on “Who’s who”, and the “Why’s” and “When’s” of
                family life. Family Library offers a convenient way to share
                precious family stories with family members no matter where they
                are in the world.
              </p>
            </Col>
            <Col>
              <Row>
                <p>
                  <img
                    style={styles.icons}
                    src="/images/earth.svg"
                    alt="holding hands icon"
                    height="24px"
                  />
                  Family Library brings families closer together, even when
                  separated, and memories come back to life in story form
                </p>

                <p>
                  <span>
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

                <p>
                  <span>
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

                <p>
                  <span>
                    <img
                      style={styles.icons}
                      src="/images/human-queue.svg"
                      alt="holding hands icon"
                      height="24px"
                    />
                  </span>
                  Memories of precious experiences of “old time” family photo
                  albums, letters from Grandpa, or family favorite recipes!
                </p>
              </Row>
            </Col>
          </Row>
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
export default About;

//this.onclick={this.props.toggleAboutBar}
