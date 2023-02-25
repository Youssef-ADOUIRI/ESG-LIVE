import React from "react";
import Headeresg from "../components/Headeresg";
import "./Layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App d-flex">
      <Headeresg />
      <Outlet />
    </div>
  );
};

export default Layout;
