import React, { Component } from "react";

class TitleMiniFeature extends Component {
  render() {
    return (
      <div
        className="col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay="0.5s"
        style={{
          visibility: "visible",
          animationDelay: this.props.delay_time,
          animationName: "fadeInUp",
        }}
      >
        <div className="service-item rounded h-100 p-5">
          <div className="d-flex align-items-center ms-n5 mb-4">
            <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4"></div>
            <h4 className="mb-0">{this.props.title}</h4>
          </div>
          <p className="mb-4">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default TitleMiniFeature;
