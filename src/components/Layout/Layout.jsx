import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
