import React, { Component } from "react";

class ItemComboTicket extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="team-item rounded">
          <div className="text-center p-4">
            <h5>{this.props.quick_wizard}</h5>
            <span>{this.props.designation_info}</span>
          </div>
          <img className="img-fluid" src={this.props.image1} alt="" />
          <div className="text-center p-4">
            <h5>{this.props.title1}</h5>
          </div>
          <img className="img-fluid" src={this.props.image2} alt="" />
          <div className="text-center p-4">
            <h5>{this.props.title2}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemComboTicket;
