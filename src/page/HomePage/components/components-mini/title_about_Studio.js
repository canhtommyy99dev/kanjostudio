import React, { Component } from "react";

class TitleAboutStudio extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="team-item rounded">
          <img className="img-fluid" src={this.props.image} alt="" />
          <div className="text-center p-4">
            <h5>{this.props.title}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleAboutStudio;
