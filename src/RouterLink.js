/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./page/AboutPage/AboutPage";
import ContactPage from "./page/ContactPage/ContactPage";
import HomePage from "./page/HomePage/HomePage";
import TrangDiem from "./page/TrangDiem/TrangDiem";
class RouterLink extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about_page" element={<AboutPage />} />
        <Route path="/contact_page" element={<ContactPage />} />
        <Route path="/trang_diem" element={<TrangDiem />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    );
  }
}

export default RouterLink;
