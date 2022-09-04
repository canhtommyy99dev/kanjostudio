/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

class ImageLinkSlide extends Component {
  render() {
    return (
      <div className={this.props.carousel}>
        <img className="w-100" src={this.props.link_image} alt="Image" />{" "}
      </div>
    );
  }
}

export default ImageLinkSlide;
