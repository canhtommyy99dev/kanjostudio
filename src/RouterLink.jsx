/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./page/AboutPage/AboutPage";
import AlbumPage from "./page/AlbumPage/AlbumPage";
import ContactPage from "./page/ContactPage/ContactPage";
import DemoDevApplication from "./page/DemoDev/demodev";
import HomePage from "./page/HomePage/HomePage";
import BangChupEmBe from "./page/ServicePhotography/PageMore/BangGiaChupAnh/BangChupEmBe";
import BangGiaChupAnhCuoi from "./page/ServicePhotography/PageMore/BangGiaChupAnh/BangGiaChupAnhCuoi";
import BangGiaChupAnhDoanhNhan from "./page/ServicePhotography/PageMore/BangGiaChupAnh/BangGiaChupAnhDoanhNhan";
import BangGiaChupAnhGiaDinh from "./page/ServicePhotography/PageMore/BangGiaChupAnh/BangGiaChupAnhGiaDinh";
import BangGiaChupAnhPhimTruong from "./page/ServicePhotography/PageMore/BangGiaChupAnh/BangGiaChupAnhPhimTruong";
import BangGiaChupNgoaiCanh from "./page/ServicePhotography/PageMore/BangGiaChupAnh/BangGiaChupNgoaiCanh";
import BangGiaChupThoiTrang from "./page/ServicePhotography/PageMore/BangGiaChupAnh/BangGiaChupThoiTrang";
import BangGiaChupVayCuoi from "./page/ServicePhotography/PageMore/BangGiaChupAnh/BangGiaChupVayCuoi";
import ServicePhotography from "./page/ServicePhotography/ServicePhotography";
import TrangDiem from "./page/TrangDiem/TrangDiem";
import Videos from "./page/Videos/Videos";
class RouterLink extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about_page" element={<AboutPage />} />
        <Route path="/contact_page" element={<ContactPage />} />
        <Route path="/trang_diem" element={<TrangDiem />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/video" element={<Videos />} />
        <Route path="/service" element={<ServicePhotography />} />
        <Route
          path="/bang_gia_chup_anh_cuoi"
          element={<BangGiaChupAnhCuoi />}
        />
        <Route
          path="/bang_gia_chup_anh_gia_dinh"
          element={<BangGiaChupAnhGiaDinh />}
        />
        <Route
          path="/bang_gia_chup_anh_doanh_nhan"
          element={<BangGiaChupAnhDoanhNhan />}
        />
        <Route path="/bang_gia_chup_anh_cho_be" element={<BangChupEmBe />} />
        <Route
          path="/bang_gia_chup_anh_thoi_trang"
          element={<BangGiaChupThoiTrang />}
        />{" "}
        <Route
          path="/bang_gia_chup_anh_phim_truong"
          element={<BangGiaChupAnhPhimTruong />}
        />
        <Route
          path="/bang_gia_chup_anh_vip_ngoai_anh"
          element={<BangGiaChupNgoaiCanh />}
        />
        <Route
          path="/bang_gia_chup_anh_vay_cuoi"
          element={<BangGiaChupVayCuoi />}
        />
        <Route path="/demo_app_in_wordpress" element={<DemoDevApplication />} />
      </Routes>
    );
  }
}

export default RouterLink;
