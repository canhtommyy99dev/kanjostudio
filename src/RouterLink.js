/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
class RouterLink extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    );
  }
}

export default RouterLink;
