/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">
            {/* <img
              className="img-fluid me-3"
              src="img/icon/icon-02-primary.png"
              alt=""
            /> */}
            Kanjo Studio
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
            {/* trang chủ */}
            <a href="/" className="nav-item nav-link active">
              Trang Chủ
            </a>

            {/* trang điểm */}
            <a href="/trang_diem" className="nav-item nav-link">
              Trang Điểm
            </a>
            {/*ambum */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Album
              </a>
              <div className="dropdown-menu bg-light border-0 m-0">
                <a href="/in_door_studio" className="dropdown-item">
                  Indoor Studio
                </a>
                <a href="/phim_truong" className="dropdown-item">
                  Phim Trường
                </a>
                <a href="/phong_su_cuoi" className="dropdown-item">
                  Phóng Sự Cưới
                </a>
                <a href="/ngoai_canh" className="dropdown-item">
                  Ngoại cảnh
                </a>
                <a href="/ha_noi" className="dropdown-item">
                  Hà Nội
                </a>
              </div>
            </div>
            {/* video */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Video
              </a>
              <div className="dropdown-menu bg-light border-0 m-0">
                <a href="/pre_wedding" className="dropdown-item">
                  Pre-Wedding
                </a>
                <a href="/wedding_day" className="dropdown-item">
                  Wedding Day
                </a>
                <a href="/vlog_ky_niem_cuoi" className="dropdown-item">
                  Vlog Ký niệm cưới
                </a>
              </div>
            </div>
            {/* Bảng Giá */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Bảng Giá
              </a>
              <div className="dropdown-menu bg-light border-0 m-0">
                <a href="feature.html" className="dropdown-item">
                  Chụp Ảnh Cưới
                </a>
                <a href="appointment.html" className="dropdown-item">
                  Chụp Ảnh Doanh Nhân
                </a>
                <a href="team.html" className="dropdown-item">
                  Chụp Ảnh Cho Bé
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Chụp Ảnh Gia Đình
                </a>
                <a href="404.html" className="dropdown-item">
                  Chụp ảnh thời trang
                </a>
                <a href="404.html" className="dropdown-item">
                  Chụp ảnh váy cưới
                </a>
                <a href="404.html" className="dropdown-item">
                  Phim Trường Studio Kanjo
                </a>{" "}
                <a href="404.html" className="dropdown-item">
                  VIP Ngoại cảnh
                </a>
                <a href="404.html" className="dropdown-item">
                  Hà Nội
                </a>
              </div>
            </div>
            {/* video */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Danh Mục
              </a>
              <div className="dropdown-menu bg-light border-0 m-0">
                <a href="feature.html" className="dropdown-item">
                  Chụp Ảnh Cưới
                </a>
                <a href="appointment.html" className="dropdown-item">
                  Chụp Ảnh Doanh Nhân
                </a>
                <a href="team.html" className="dropdown-item">
                  Chụp Ảnh Cho Bé
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Chụp Ảnh Gia Đình
                </a>
                <a href="404.html" className="dropdown-item">
                  Chụp ảnh thời trang
                </a>
                <a href="404.html" className="dropdown-item">
                  Chụp ảnh váy cưới
                </a>
                <a href="404.html" className="dropdown-item">
                  Chụp ảnh áo dài
                </a>
              </div>
            </div>
            {/*about studio*/}
            <a href="about.html" className="nav-item nav-link">
              Kanjo Studio
            </a>
            <a href="contact.html" className="nav-item nav-link">
              Liên Hệ
            </a>
          </div>
        </div>
        <a
          href="https://zalo.me/0983318797"
          className="btn btn-primary px-3 d-none d-lg-block"
        >
          Liên Hệ Zalo
        </a>
      </nav>
    );
  }
}

export default Navbar;
