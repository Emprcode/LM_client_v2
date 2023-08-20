import React, { useEffect } from "react";
import { MainLayout } from "../../layout/mainlayout/MainLayout";
import { Container, Row } from "react-bootstrap";


const BorrowedBooks = () => {
 
  return (
    <MainLayout>
      <Container className="p-4">
        <div>
          <h2 className="text-center p-5 fw-bold"> Borrowed Books</h2>
          <div className="d-flex gap-4 flex-wrap">
            
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default BorrowedBooks;
