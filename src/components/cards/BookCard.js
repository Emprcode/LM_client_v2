import React from "react";
import { Button, Card } from "react-bootstrap";

export const BookCard = ({ thumbnail, title }) => {
  return (
    <div>
      <Card style={{ width: "18rem", border: "none" }}>
        <Card.Img
          src={thumbnail}
          style={{ width: "50%", margin: "1rem auto" }}
        />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <div className="d-flex gap-2 justify-content-center">
            <Button variant="warning">Borrow</Button>
            {/* {userInfo?.role === "teacher" && (
          <Button variant="danger">
            Delete
          </Button>
        )} */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
