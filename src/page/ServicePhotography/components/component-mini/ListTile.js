import React, { Component } from "react";

class ListTile extends Component {
  render() {
    return (
      <div
        className="col-lg-3 col-md-6 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <div className="team-item rounded">
          <img className="img-fluid" src={this.props.image_link} alt="" />
          <div className="text-center p-4">
            <h5>{this.props.title}</h5>
            <a href={this.props.link_to}>
              <span>{this.props.description}</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTile;
