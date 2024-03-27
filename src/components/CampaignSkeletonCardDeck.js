import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';
import ResponsiveCardDeck from "./ResponsiveCardDeck"

const CampaignSkeletonCardDeck = () => {

    return (
        <>
            <Container className="my-4">
                <Skeleton width={72} height={36} style={{ borderRadius: "16px" }} />
                <Skeleton width={72} height={36} style={{ marginLeft: "16px", borderRadius: "16px" }} />
                <Skeleton width={72} height={36} style={{ marginLeft: "16px", borderRadius: "16px" }} />
            </Container>
            <ResponsiveCardDeck aria-label="loading">
                {Array(100).fill("").map((item, index) => {
                    return (
                        <CampaignSkeletonCard key={index} />
                    )
                })}
            </ResponsiveCardDeck>
        </>
    )
}

const CampaignSkeletonCard = () => {
    return (
        <Col className="my-4">
            <Card className="campaign-card-horizontal border-0" style={{ cursor: "pointer" }}>
                <Skeleton width={`40%`} />
                <Skeleton height={175} />
                <Skeleton width={`66.67%`} />
                <Skeleton width={`33.33%`} />
            </Card>
        </Col>
    )
}

export default CampaignSkeletonCardDeck;

