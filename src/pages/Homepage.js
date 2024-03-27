import React from "react";
import HeaderBody from "../components/HeaderBody";
import AllCampaigns from "../components/AllCampaigns";
import CampaignSkeletonCardDeck from "../components/CampaignSkeletonCardDeck";

const Homepage = ({ campaigns, isLoading, updateSearchText }) => {
  return (
    <>
      {isLoading && <CampaignSkeletonCardDeck />}
      <HeaderBody />
      <AllCampaigns campaigns={campaigns} />
    </>
  );
};

export default Homepage;
