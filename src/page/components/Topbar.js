/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Topbar extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone-alt me-2" />
              <small>0983 318 797</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-envelope-open me-2" />
              <small>kanjodata@kanjostudio.com</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-clock me-2" />
              <small>Thứ 2 - Chủ Nhật : 08h00 - 21h00</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center">
              <a className="text-white-50 ms-4" href="">
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
