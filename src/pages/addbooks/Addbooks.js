import { MainLayout } from "../../layout/mainlayout/MainLayout";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBookAction } from "../../redux/book/BookAction";

const Addbooks = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { isLoading } = useSelector((state) => state.book);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addBookAction(formData)) &&
      setFormData({ title: "", author: "", isbn: "", year: "", thumbnail: "" });
  };
  return (
    <MainLayout>
      <Container className="">
        <Row className="p-4 d-flex justify-content-center">
          <div>
            <h4 className=" text-center fw-bold">Add Book</h4>
          </div>

          <Col md={5} sm={12} xs={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Book Title"
                  required
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  placeholder="Author"
                  required
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  placeholder="ISBN"
                  required
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Year Published</Form.Label>
                <Form.Control
                  placeholder="Year"
                  required
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                  placeholder="Image"
                  required
                  type="text"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="warning"
                type="submit"
                className="mt-4 d-flex align-items-center gap-3">
                ADD BOOK{" "}
                {/* <span>
                  {isLoading && <Spinner animation="border" variant="dark" />}
                </span> */}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Addbooks;
