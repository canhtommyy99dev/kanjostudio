import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../components/TilteCS";
import AboutFor from "./components/AboutFor";
import FeatureComponent from "./components/FeatureComponent";
class AboutPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Thông tin Kanjo</title>
        </Helmet>

        <PageHeader title="Thông tin Kanjo" />
        <FeatureComponent />
        <AboutFor />
      </div>
    );
  }
}

export default AboutPage;
