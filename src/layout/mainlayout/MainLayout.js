import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "./MainLayout.css";
import { TheSidebar } from "../theSidebar/TheSidebar";

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
