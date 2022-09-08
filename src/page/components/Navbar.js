import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
              <NavLink
                to="/album"
                className={({ isActive }) =>
                  ["nav-item nav-link", isActive ? "active" : null]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                Album
              </NavLink>
              {/* video */}
              <NavLink
                to="/video"
                className={({ isActive }) =>
                  ["nav-item nav-link", isActive ? "active" : null]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                Videos
              </NavLink>
              {/* Bảng Giá */}
              <div className="nav-item dropdown">
                <NavLink to="/service" className="nav-link dropdown-toggle">
                  Bảng Giá
                </NavLink>
                <div className="dropdown-menu bg-light border-0 m-0">
                  <NavLink
                    to="/bang_gia_chup_anh_cuoi"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    Chụp Ảnh Cưới
                  </NavLink>
                  <NavLink
                    to="/bang_gia_chup_anh_doanh_nhan"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    Chụp Ảnh Doanh Nhân
                  </NavLink>
                  <NavLink
                    to="/bang_gia_chup_anh_cho_be"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    Chụp Ảnh Cho Bé
                  </NavLink>
                  <NavLink
                    to="/bang_gia_chup_anh_gia_dinh"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    Chụp Ảnh Gia Đình
                  </NavLink>
                  <NavLink
                    to="/bang_gia_chup_anh_thoi_trang"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    Chụp Ảnh Thời Trang
                  </NavLink>
                  <NavLink
                    to="/bang_gia_chup_anh_vay_cuoi"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    Chụp Ảnh Váy Cưới
                  </NavLink>
                  <NavLink
                    to="/bang_gia_chup_anh_phim_truong"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    Phim Trường
                  </NavLink>
                  <NavLink
                    to="/bang_gia_chup_anh_vip_ngoai_anh"
                    className={({ isActive }) =>
                      ["dropdown-item", isActive ? "active" : null]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    VIP Ngoại Ảnh
                  </NavLink>
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
