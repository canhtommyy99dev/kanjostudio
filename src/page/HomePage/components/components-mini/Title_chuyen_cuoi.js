import React, { Component } from "react";
import Button from "@mui/material/Button";

class TitleChuyenCuoi extends Component {
  apiShow = () => {
    console.log("Hello");
  };

  render() {
    return (
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="display-6 mb-5">{this.props.title}</h1>
          <h5>{this.props.description}</h5>
          <hr />
          <p className="mb-4">{this.props.description1}</p>
          <hr />
          <Button variant="contained" href={this.props.url}>
            Xem Thêm
          </Button>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div
            className="position-relative rounded overflow-hidden h-100"
            style={{ minHeight: 400 }}
          >
            <img
              className="position-absolute w-100 h-100"
              src="img/feature.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TitleChuyenCuoi;
