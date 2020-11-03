import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Form,
  Button,
} from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Container className="componentContainer">
          <Row className="text-left mt-4">
            <Col xs="12" sm="3" md="4"></Col>
            <Col xs="12" sm="6" md="4">
              <Row>
                <Col className="text-left mt-4">
                  <h1 style={styles.header}>Contact</h1>
                </Col>
              </Row>
              <Form style={styles.form1}>
                <FormGroup>
                  <Label for="exampleEmail">Let us help you!</Label>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Please enter email here"
                  />
                </FormGroup>
                {/* <FormGroup>
                  <Label for="examplePassword">Enter Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="confirmPassword">Confirm Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="confirm password placeholder"
                  />
                </FormGroup> */}
                <FormGroup>
                  <Label for="exampleText">Subject:</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    placeholder="Enter your Subject here."
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Message Area:</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    placeholder="Enter your message here."
                  />
                </FormGroup>
                <Button style={styles.sendBtn}>Send</Button>
              </Form>
            </Col>
            <Col xs="12" sm="3" md="4"></Col>
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
  form1: {
    margin: "0 auto",
  },
  sendBtn: {
    float: "right",
    width: "100%",
    marginBottom: "80px",
  },
};
export default Contact;
