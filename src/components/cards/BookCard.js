import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookAction } from "../../redux/book/BookAction";

export const BookCard = ({ thumbnail, title, _id }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      dispatch(deleteBookAction(_id));
    }
  };
  return (
    <div>
      <Card style={{ width: "18rem", border: "none" }}>
        <Card.Img
          src={thumbnail}
          style={{ width: "200px", height: "230px", margin: "1rem auto" }}
        />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <div className="d-flex gap-2 justify-content-center">
            <Button variant="warning">Borrow</Button>
            {userInfo?.role === "teacher" && (
              <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                Delete
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
