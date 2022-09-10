/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import ImageLinkSlide from "./components-mini/ImageLinkSide";

class Carousel extends Component {
  render() {
    return (
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <ImageLinkSlide
              carousel="carousel-item active"
              link_image="/img/slide_background/slide1.jpg"
            />
            <ImageLinkSlide
              carousel="carousel-item"
              link_image="/img/slide_background/slide2.jpg"
            />
            <ImageLinkSlide
              carousel="carousel-item"
              link_image="/img/slide_background/slide3.jpg"
            />
            <ImageLinkSlide
              carousel="carousel-item"
              link_image="/img/slide_background/slide4.jpg"
            />
            <ImageLinkSlide
              carousel="carousel-item"
              link_image="/img/slide_background/slide5.jpg"
            />
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
