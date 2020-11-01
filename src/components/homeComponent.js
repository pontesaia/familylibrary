import React, { Component } from "react";
import MainNav from "./mainNavComponent";
import { Container, Row, Col, Button } from "reactstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="mt-2">
            <Col className="text-center">
              <MainNav />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col className="text-center">
              <img
                alt="Family library"
                src="/images/logoImage.png"
                id="logoImage"
              />
              <h1 className="mt-3" style={styles.logoType}>
                family library
              </h1>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col xs="12" md="6">
              <Button
                className="btn-block mb-2"
                style={styles.buttonLogin}
                id="loginBtn"
              >
                LOG IN
              </Button>
            </Col>
            <Col xs="12" md="6">
              <Button
                className="btn-block mb-2"
                style={styles.buttonRegister}
                id="registerBtn"
              >
                REGISTER
              </Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = {
  buttonLogin: {
    borderRadius: "8px",
    backgroundColor: "white",
    border: "solid black 3px",
    color: "black",
    fontSize: "2rem",
    width: "80%",
  },
  buttonRegister: {
    borderRadius: "8px",
    backgroundColor: "black",
    border: "solid black 3px",
    fontSize: "2rem",
    width: "80%",
  },
  logoType: {
    fontFamily: "Comfortaa",
    fontSize: "clamp(40px, 8vw, 100px)",
  },
};

export default Home;
