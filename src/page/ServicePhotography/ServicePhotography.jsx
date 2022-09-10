import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../components/TilteCS";
import TitleService from "./components/TitleService";

class ServicePhotography extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Bảng Giá Kanjo Studio</title>
        </Helmet>
        <PageHeader title="Bảng Giá Kanjo Studio" />
        <TitleService />
      </div>
    );
  }
}

export default ServicePhotography;
