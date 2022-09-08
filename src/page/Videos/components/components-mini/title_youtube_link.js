import React, { Component } from "react";

class TitleYoutubeLink extends Component {
  render() {
    return (
      <div
        className="col-lg-3 col-md-6 wow fadeInUp"
        data-wow-delay="0.3s"
        key={this.props.key}
      >
        <div className="team-item rounded">
          <img className="img-fluid" src={this.props.image} alt="" />
          <div className="text-center p-4">
            <a href={this.props.link}>
              <h5>{this.props.title}</h5>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleYoutubeLink;
