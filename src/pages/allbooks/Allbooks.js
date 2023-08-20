import React, { useEffect } from "react";
import { MainLayout } from "../../layout/mainlayout/MainLayout";
import { Container, Row } from "react-bootstrap";
import { getBooksAction } from "../../redux/book/BookAction";
import { useDispatch, useSelector } from "react-redux";
import { BookCard } from "../../components/cards/BookCard";

const Allbooks = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);
  console.log(books);
  useEffect(() => {
    dispatch(getBooksAction());
  }, []);
  return (
    <MainLayout>
      <Container className="p-4">
        <div>
          <h2 className="text-center p-5 fw-bold"> All Books</h2>
          <div className="d-flex gap-4 flex-wrap">
            {books.map((item, i) => (
              <BookCard key={i} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Allbooks;
