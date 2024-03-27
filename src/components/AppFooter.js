import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import AppStoreBadge from "../images/AppStoreBadge.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const AppFooter = () => {
  return (
    <div
      style={{
        minHeight: "50vh",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        marginTop: "24px"
      }}
    >
      <Container>
        <Row className="py-5">
          <Col xs={12} md={6} className="py-4">
            <h1>NewVote</h1>
          </Col>
        </Row>
        <Row className="border-top py-4">
          <Col>
            <a
              href="https://www.facebook.com/newvote"
              style={{ color: "#FFFFFF" }}
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ fontSize: "20px", margin: "8px 24px 8px 0" }}
              />
            </a>
            <a
              href="https://www.twitter.com/newvote"
              style={{ color: "#FFFFFF" }}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: "20px", margin: "8px 24px 8px 0" }}
              />
            </a>
            <a
              href="https://www.instagram.com/newvote"
              style={{ color: "#FFFFFF" }}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "20px", margin: "8px 24px 8px 0" }}
              />
            </a>
          </Col>
          <div className="m-2 d-flex justify-content-end">
            <a style={{ color: "#FFFFFF" }} href="#privacy-policy">
              Privacy Policy
            </a>
            <a style={{ color: "#FFFFFF", marginLeft: "24px" }} href="#terms">
              Terms
            </a>
            <a style={{ color: "#FFFFFF", marginLeft: "24px" }} href="#other">
              Other
            </a>
            <span style={{ marginLeft: "24px" }}>
              &#169; 2020 NewVote Technologie.
            </span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

const VerticalLinkGroup = ({ boldedText, arr }) => {
  return (
    <>
      <p>
        <strong>
          <a href="#to-link" style={{ color: "#FFFFFF" }}>
            {boldedText}
          </a>
        </strong>
      </p>
      {arr.map((item) => {
        return (
          <p key={item}>
            <a href="#to-link" style={{ color: "#FFFFFF" }}>
              {item}
            </a>
          </p>
        );
      })}
    </>
  );
};

export default AppFooter;
