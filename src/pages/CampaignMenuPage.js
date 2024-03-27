import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Nav,
  Navbar as NavbarBs,
  Button
} from "react-bootstrap";
import ScrollspyNav from "react-scrollspy-nav";
import {
  getMenuUrl,
  getHeartIcon,
  getDeliveryFeeSpan,
  getDeliveryTimeSpan
} from "../utils/HelperFunctions";
import MoreInfoModal from "../components/MoreInfoModal";
import {
  horizontalScrollMenuStyle,
  horizontalScrollMenuItemStyle
} from "../Styles";
import CampaignMenuItemModal from "../components/CampaignMenuItemModal";

const CampaignMenuPage = ({ campaign }) => {
  const navItems = [
    "Centre",
    "Centre-Gauche",
    "Extrême-Gauche",
    "Centre-Droit",
    "Extrême-Droite",
    "Droite",
    "Gauche"
  ];
  const headingIds = navItems.map((item) => getMenuUrl(item));

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <CampaignMenuHeader campaign={campaign} />
      <Container>
        <ScrollspyNavbar navItems={navItems} headingIds={headingIds} />
        <MealCategoryDivs
          campaign={campaign}
          headingIds={headingIds}
          navItems={navItems}
        />
      </Container>
      <StickyBottomButton />
    </div>
  );
};

const MealCategoryDivs = ({ headingIds, navItems, campaign }) => {
  return (
    <>
      {headingIds.map((id, index) => {
        return (
          <div key={id} className="mt-3" id={`${id}-div`}>
            <h2 className="pt-4 my-0" id={id}>
              {navItems[index]}
            </h2>
            <CampaignMenuCardDeck
              campaign={campaign}
              category={navItems[index]}
            />
          </div>
        );
      })}
    </>
  );
};

const CampaignMenuHeader = ({ campaign }) => {
  return (
    <Row
      variant="danger"
      style={{
        height: "43vh",
        backgroundImage: `url(${campaign.campaignImage})`,
        backgroundSize: "cover"
      }}
    >
      <CampaignDetails campaign={campaign} />
    </Row>
  );
};

const CampaignDetails = ({ campaign }) => {
  const bullet = " \u2022 ";
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <Col
        sm={12}
        md={7}
        lg={5}
        className="my-auto pl-5 py-3"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h1>{campaign.campaignName}</h1>
        <Card.Text className="mb-1">
          Les élections communales et provinciales belges de 2024 auront lieu le
          dimanche 13 octobre 2024 afin d’élire les conseillers communaux et
          provinciaux. Elles se déroulent la même année que les élections
          législatives, régionales, communautaires et européennes qui auront
          lieu en juin
        </Card.Text>
        <p className="mb-1">
          {bullet}
          <strong
            style={{ color: "#05A357", cursor: "pointer" }}
            onClick={() => handleModalOpen()}
          >
            More info
          </strong>
        </p>
        <MoreInfoModal
          campaign={campaign}
          modalIsOpen={modalIsOpen}
          handleModalOpen={handleModalOpen}
        />
      </Col>
      <Col xs={12} className="pl-5">
        {getHeartIcon(campaign.isCustomerFavourite, "2x")}
      </Col>
    </>
  );
};

const CampaignMenuCardDeck = ({ campaign, category }) => {
  return (
    <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
      {campaign.party
        .filter((item) => item.category === category)
        .map((item, index) => (
          <CampaignMenuCard
            key={index}
            itemName={item.name}
            credit={item.credit}
            image={item.image}
          />
        ))}
    </Row>
  );
};

const CampaignMenuCard = ({ itemName, credit, image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <Col className="mt-4">
      <Card
        className="campaign-menu-item"
        style={{ borderWidth: "0.5px" }}
        onClick={() => handleModalOpen()}
      >
        <Row>
          <Col xs={7}>
            <Card.Body>
              <h5>{itemName}</h5>
              <Card.Text>{credit.toFixed(2)} Credits</Card.Text>
            </Card.Body>
          </Col>
          <Col xs={5}>
            <div
              className="floting rounded-circle bg-danger d-flex justify-content-center"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                transform: "translate(-30%, -10%)",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "bold"
              }}
            >
              3
            </div>
            <Card.Img src={image} alt="item img" />
          </Col>
        </Row>
      </Card>
      <CampaignMenuItemModal
        itemName={itemName}
        credit={credit}
        image={image}
        handleModalOpen={handleModalOpen}
        modalIsOpen={modalIsOpen}
      />
    </Col>
  );
};

const ScrollspyNavbar = ({ navItems, headingIds }) => {
  return (
    <div className="d-flex justify-content-between align-items-center pl-0 sticky-top opacity-75 horizontal-navbar">
      <div></div>
      <Button
        block
        size="lg"
        className="m-2 border-0 shadow-sm"
        style={{
          borderRadius: "0",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          width: "10rem"
        }}
        variant="outline-primary"
      >
        <span className="float-left">30</span>
        <span className="float-right">Tokens</span>
      </Button>
    </div>
  );
};

const StickyBottomButton = () => {
  return (
    <div
      style={{
        position: "sticky",
        bottom: "20px" /* Adjust the distance from the bottom as needed */,
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",
        padding: "10px",
        width: "15rem"
      }}
    >
      <Button
        className="m-2 border-0 shadow-sm"
        style={{
          opacity: "0.90",
          borderRadius: "10",
          padding: "10px",
          width: "15rem",
          height: "5rem"
        }}
      >
        <span>Validate your vote</span>
      </Button>
    </div>
  );
};

export default CampaignMenuPage;
