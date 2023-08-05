import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "./MainLayout.css";
import { TheSideBar } from "../theSideBar/TheSideBar";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <TheSideBar/>
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};
