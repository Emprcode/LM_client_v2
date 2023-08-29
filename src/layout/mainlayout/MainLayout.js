import React from "react";
import { Header } from "../header/Header.js";
import { Footer } from "../footer/Footer.js";
import "./MainLayout.css";
import { TheSidebar } from "../theSidebar/TheSidebar.js";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <TheSidebar />
        <div className="main">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
