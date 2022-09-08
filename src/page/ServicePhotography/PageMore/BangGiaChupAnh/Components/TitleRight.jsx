import React, { Component } from "react";

class TitleRight extends Component {
  render() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <h1 className="display-6 mb-5">{this.props.title}</h1>
              <p className="mb-4">{this.props.descriptions}</p>
              <p className="mb-4">{this.props.descriptions1}</p>
              <p className="mb-4">{this.props.descriptions2}</p>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="position-relative rounded overflow-hidden h-100"
                style={{ minHeight: 400 }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src={this.props.link_image}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleRight;
