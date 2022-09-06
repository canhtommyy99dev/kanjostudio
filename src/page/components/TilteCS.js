import React, { Component } from "react";

class PageHeader extends Component {
  render() {
    return (
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-4 animated slideInDown mb-4">
            {this.props.title}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Trang Chủ</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {this.props.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    );
  }
}

export default PageHeader;
