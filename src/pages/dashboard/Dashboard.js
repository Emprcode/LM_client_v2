import React from "react";
import { MainLayout } from "../../layout/mainlayout/MainLayout.js";
import { IoMdNotifications } from "react-icons/io";
import { Col, Container, Row } from "react-bootstrap";
import { PiBooksFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <MainLayout>
      <Container>
        <div className="p-5 d-flex justify-content-between">
          <div className="h1 fw-bold">Dashboard</div>
          {/* <div>
            <span className="bg-light p-4 rounded-circle">
              <IoMdNotifications size={35} />
            </span>
          </div> */}
        </div>
        <Row className=" d-flex justify-content-around flex-wrap">
          <Col className="card1 col-5 p-5 d-flex justify-content-center align-items-center gap-4 rounded">
            <div>
              <PiBooksFill size={70} />
            </div>
            <div>
              <h5>Total Books</h5>
              <h2 className="fw-bold">100</h2>
            </div>
          </Col>
          <Col className="card2 col-5 p-5 d-flex justify-content-center align-items-center gap-4 rounded">
            <div>
              <FaBook size={50} />
            </div>
            <div>
              <h5>Borrowed Books</h5>
              <h2 className="fw-bold">20</h2>
            </div>
          </Col>
        </Row>

        <Row className="p-5 mt-5 ">
          <h1 className="mt-5 fw-bold d-flex justify-content-center">
            More Info Coming Soon......
          </h1>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
