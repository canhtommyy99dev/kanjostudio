/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./page/AboutPage/AboutPage";
import HomePage from "./page/HomePage/HomePage";
class RouterLink extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about_page" element={<AboutPage />} />
      </Routes>
    );
  }
}

export default RouterLink;
