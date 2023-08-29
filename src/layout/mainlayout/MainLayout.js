import React from "react";
import { Header } from "../header/Header.js";
import { Footer } from "../footer/Footer.js";
import "./MainLayout.css";
import { TheSideBar } from "../theSidebar/TheSideBar.js";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <TheSideBar />
        <div className="main">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
