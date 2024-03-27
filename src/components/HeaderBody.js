import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeaderBody = () => {
  return (
    <Container fluid>
      <Row variant="warning" style={{ backgroundColor: "#122329" }}>
        <Col
          xs={12}
          sm={4}
          className="my-auto px-4 mr-n4 margin-tp"
          style={{ color: "#FFFFFF" }}
        >
          <h1 className="pr-5 text-pr">Header Title</h1>
          <p className="pr-5 text-pr">here maybe some texte </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderBody;
