import React, { useState, useEffect } from "react";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CampaignMenuPage from "./pages/CampaignMenuPage";
import Homepage from "./pages/Homepage";
// import axios from "axios";
import newvote from "./dataSource/newvote.json";
import { getMenuUrl } from "./utils/HelperFunctions";
import AppFooter from "./components/AppFooter";
import SortByCardDeckPage from "./pages/SortByCardDeckPage";
import SearchPage from "./pages/SearchPage";

function App() {

  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (str) => {
    setSearchText(str);
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setCampaigns(newvote);
      setIsLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <AppNavbar
          searchText={searchText}
          updateSearchText={updateSearchText}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Homepage
                {...props}
                campaigns={campaigns}
                isLoading={isLoading}
                updateSearchText={updateSearchText}
              />
            )}
          />
          {campaigns.map((campaign) => {
            return (
              <Route
                key={campaign.campaignId}
                path={`/${getMenuUrl(campaign.campaignName)}`}
                render={(props) => (
                  <CampaignMenuPage {...props} campaign={campaign} />
                )}
              />
            );
          })}
        </Switch>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
