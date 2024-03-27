import React from "react";
import { Modal } from "react-bootstrap";
import ottawaMap from "../images/ottawaMap.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

const MoreInfoModal = ({ campaign, handleModalOpen, modalIsOpen }) => {
  return (
    <>
      <Modal centered keyboard show={modalIsOpen} onHide={handleModalOpen}>
        <Modal.Header
          style={{ height: "30vh", backgroundSize: "cover" }}
          closeButton
          className="border-0"
        >
          <Modal.Title className="bg-white px-2 my-auto mx-auto rounded-lg font-weight-normal">
            {campaign.campaignName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-2"></Modal.Body>
      </Modal>
    </>
  );
};

export default MoreInfoModal;
