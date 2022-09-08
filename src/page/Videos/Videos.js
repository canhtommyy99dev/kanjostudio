import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../components/TilteCS";
import VideosMake from "./components/VideosMake";

class Videos extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Videos Kanjo Studio</title>
        </Helmet>
        <PageHeader title="Videos" />
        <VideosMake />
      </div>
    );
  }
}

export default Videos;
