import React, { Component } from "react";
import PageHeader from "../components/TilteCS";
import { Helmet } from "react-helmet";

class TrangDiem extends Component {
  state = {
    items: [
      { call: "station one", frequency: "000" },
      { call: "station two", frequency: "001" },
    ],
  };
  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet>
          <title>Trang điểm</title>
        </Helmet>
        <PageHeader title="Trang Điểm" />
      </div>
    );
  }
}

export default TrangDiem;
