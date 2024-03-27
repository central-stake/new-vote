import React from "react";
import ResponsiveCardDeck from "./ResponsiveCardDeck";
import CampaignCard from "./CampaignCard";

const AllCampaigns = ({ campaigns }) => {
    return (
        <ResponsiveCardDeck>
            {campaigns.map(campaign => {
                return <CampaignCard key={campaign.campaignId} campaign={campaign} />
            })}
        </ResponsiveCardDeck>
    )
}




export default AllCampaigns;