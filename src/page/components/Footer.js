/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h1 className="text-white mb-4">
                {/* <img
                  className="img-fluid me-3"
                  src="img/icon/icon-02-light.png"
                  alt=""
                /> */}
                Kanjo Studio
              </h1>
              <p>
                Chụp ảnh cưới chuyên nghiệp . Đào tạo nhiếp ảnh chuyên nghiệp .
                Đào tạo makeup chuyên nghiệp . Thương hiệu váy cao cấp . Chụp
                Ảnh Baby, Gia Đình
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-square me-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square me-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square me-1" href="">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-square me-0" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Địa Chỉ</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3" />
                544 Phố Văn Giang, Ecopark, Hưng Yên
              </p>
              <p>
                <i className="fa fa-phone-alt me-3" />
                0983 318 797
              </p>
              <p>
                <i className="fa fa-envelope me-3" />
                kanjodata@kanjostudio.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Truy Cập Nhanh</h5>
              <a className="btn btn-link" href="/about_page">
                Kanjo Studio
              </a>
              <a className="btn btn-link" href="/contact">
                Liên Hệ
              </a>
              <a className="btn btn-link" href="">
                Our Services
              </a>
              <a className="btn btn-link" href="">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a href="/">Kanjo Studio</a>, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By <a href="https://alexmedia.vn">Alex Media</a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
