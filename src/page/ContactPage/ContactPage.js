/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../components/TilteCS";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Thông tin Liên Hệ</title>
        </Helmet>

        <PageHeader title="Thông tin Liên Hệ" />
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <h1 className="display-6 mb-5">LIÊN HỆ KANJO STUDIO </h1>
                <p className="mb-4">
                  <h3>Địa Chỉ: 544 Phố Văn Giang, Ecopark, Hưng Yên</h3>
                  <br />
                  <hr />
                  <br />
                  ☎ Hotline : 0983 318 797
                  <br />
                  <hr />
                  <br />
                  ☎️ Zalo: 0983 318 797
                </p>
              </div>
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.5s"
                style={{ minHeight: 450 }}
              >
                <div className="position-relative rounded overflow-hidden h-100">
                  <iframe
                    className="position-relative w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.3580344017823!2d105.92989351275283!3d20.947095427021175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135af89a88b97f5%3A0x2a9f25b744576fc9!2sKanjo%20Studio!5e1!3m2!1svi!2s!4v1662451141118!5m2!1svi!2s"
                    frameBorder={0}
                    style={{ minHeight: 450, border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
