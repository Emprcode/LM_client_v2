import React, { useEffect } from "react";
import { MainLayout } from "../../layout/mainlayout/MainLayout.js";
import { IoMdNotifications } from "react-icons/io";
import { Col, Container, Row } from "react-bootstrap";
import { PiBooksFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../../redux/book/BookAction.js";
import { BookCard } from "../../components/cards/BookCard.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);
  console.log(books);
  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  const filteredBooks = books.slice(-4);
  return (
    <MainLayout>
      <Container>
        <div className="p-5 d-flex justify-content-between">
          <div className="h1 fw-bold">Dashboard</div>
        </div>
        <Row className=" d-flex justify-content-around gap-4 flex-wrap">
          <div className="card1 col-md-5 p-5 d-flex justify-content-center align-items-center gap-4 rounded">
            <div>
              <PiBooksFill size={70} />
            </div>
            <div>
              <h5>Total Books</h5>
              <h2 className="fw-bold">{books.length}</h2>
            </div>
          </div>
          <div className="card2 col-md-5 p-5 d-flex justify-content-center align-items-center gap-4 rounded">
            <div>
              <FaBook size={50} />
            </div>
            <div>
              <h5>Borrowed Books</h5>
              <h2 className="fw-bold">0</h2>
            </div>
          </div>
        </Row>

        <Row className="p-5 mt-5 ">
          <h1 className="p-4 fw-bold d-flex justify-content-center">
            Check out our latest book collection
          </h1>
          <div className="d-flex justify-content-around gap-4 flex-wrap">
            {filteredBooks.map((item, i) => (
              <BookCard key={i} {...item} />
            ))}
          </div>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
