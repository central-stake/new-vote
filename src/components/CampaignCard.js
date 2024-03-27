import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  getPartyUrl,
  getHeartIcon,
  getDeliveryFeeSpan,
  getDeliveryTimeSpan,
  getRatingSpan
} from "../utils/HelperFunctions";

const CampaignCard = ({ campaign }) => {
  const bullet = " \u2022 ";

  return (
    <Col className="mt-4">
      <Link
        to={`/${getPartyUrl(campaign.campaignName)}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          className="campaign-card-horizontal border-0"
          style={{ cursor: "pointer" }}
        >
          <Card.Img
            variant="top"
            src={campaign.campaignImage}
            height="175"
          />
          <Card.ImgOverlay
            className="d-flex justify-content-end"
            style={{ marginTop: "124px" }}
          >
            {getHeartIcon(campaign.isCustomerFavourite)}
          </Card.ImgOverlay>
          <Card.Body className="pl-0 pr-0">
            <Row>
              <Col xs={10}>
                <Card.Title style={{ fontSize: "18px" }}>
                  {campaign.campaignName}
                </Card.Title>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="bg-white pl-0"></Card.Footer>
        </Card>
      </Link>
    </Col>
  );
};

export default CampaignCard;
