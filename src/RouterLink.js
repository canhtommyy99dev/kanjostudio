/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./page/AboutPage/AboutPage";
import AlbumPage from "./page/AlbumPage/AlbumPage";
import ContactPage from "./page/ContactPage/ContactPage";
import HomePage from "./page/HomePage/HomePage";
import BangGiaChupAnhCuoi from "./page/ServicePhotography/PageMore/BangGiaChupAnh/BangGiaChupAnhCuoi";
import BangGiaChupAnhGiaDinh from "./page/ServicePhotography/PageMore/BangGiaChupAnh/BangGiaChupAnhGiaDinh";
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
      </Routes>
    );
  }
}

export default RouterLink;
