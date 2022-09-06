import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PageHeader from "./TilteCS";

class Navbar extends Component {
  render() {
    return (
      <div>
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ["nav-item nav-link", isActive ? "active" : null]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                Trang Chủ
              </NavLink>

              {/* trang điểm */}
              <NavLink
                to="/trang_diem"
                className={({ isActive }) =>
                  ["nav-item nav-link", isActive ? "active" : null]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                Trang Điểm
              </NavLink>
              {/* ambum */}
              <div className="nav-item dropdown">
                <NavLink to="/album" className="nav-link dropdown-toggle">
                  Album
                </NavLink>
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
                <NavLink to="/video" className="nav-link dropdown-toggle">
                  Videos
                </NavLink>
                <div className="dropdown-menu bg-light border-0 m-0">
                  <NavLink
                    to="/pre_wedding"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    Pre-Wedding
                  </NavLink>
                  <NavLink
                    to="/wedding_day"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    Wedding Day
                  </NavLink>
                  <NavLink
                    to="/vlog_ky_niem_cuoi"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    Vlog Ký niệm cưới
                  </NavLink>
                </div>
              </div>
              {/* Bảng Giá */}
              <div className="nav-item dropdown">
                <NavLink to="/service" className="nav-link dropdown-toggle">
                  Bảng Giá
                </NavLink>
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
                <NavLink to="/category" className="nav-link dropdown-toggle">
                  Danh Mục
                </NavLink>
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
              <NavLink
                to="/about_page"
                className={({ isActive }) =>
                  ["nav-item nav-link", isActive ? "active" : null]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                Kanjo Studio
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ["nav-item nav-link", isActive ? "active" : null]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                Liên Hệ
              </NavLink>
            </div>
          </div>
          <a
            href="https://zalo.me/0983318797"
            className="btn btn-primary px-3 d-none d-lg-block"
          >
            Liên Hệ Zalo
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
