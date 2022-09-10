import React, { Component } from "react";
import { Helmet } from "react-helmet";
import AboutInStudio from "./components/AboutInStudio";
import Carousel from "./components/Carousel";
import QuickWizard from "./components/QuickWizard";
import PhimCuoiStudio from "./components/PhimCuoiStudio";
import KinhNghiemCuoi from "./components/KinhNghiemCuoi";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Kanjo Studio</title>
        </Helmet>
        <Carousel />
        <QuickWizard />
        <AboutInStudio />
        <PhimCuoiStudio />
        <KinhNghiemCuoi />
      </div>
    );
  }
}
export default HomePage;
