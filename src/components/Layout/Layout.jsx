import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
