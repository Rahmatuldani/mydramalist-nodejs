import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavigationBar } from "../../components";

const LayoutApp = () => {
  return (
    <div className="layout-app">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutApp;