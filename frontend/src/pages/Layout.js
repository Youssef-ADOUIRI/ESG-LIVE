import React from "react";
import Headeresg from "../components/Headeresg";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Layout = () => {
  return (
    <div className="layout_div">
      <Navbar />
      <div className="App d-flex">
        <Headeresg />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
