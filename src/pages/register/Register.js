import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FormComponents } from "../../components/formComponents/FormComponents";
import "./Register.css"
import { registerUser } from "../../helper/axiosHelper";

const Register = () => {
  const [formData, setFormData] = useState({});

  const inputs = [
    {
      name: "fName",
      type: "text",
      label: "First Name",
      placeholder: "Jack",
      required: true,
    },
    {
      name: "lName",
      type: "text",
      label: "Last Name",
      placeholder: "Jon",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Jack@gmail.com",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "*****",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "*****",
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = formData;
    if (confirmPassword !== rest.password) {
      toast.error("Password do not match!");
      return;
    }

    const { status, message } = await registerUser(rest);
    toast[status](message);
  };
  return (
    <div className="bg-color">
      <Container>
        <Row className="mb-4 d-flex justify-content-center">
          <div className="h4 p-4">
            <Link to="/" className="nav-link ">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <h2 className="text-center fw-bold"> Registration</h2>
          <hr />

          {/* <Col className="p-5 text-center ">
            <div className="p-5">
              <h3 className="fw-bold mb-3"> Welcome!</h3>

              <p> Please register here to use our system </p>
            </div>
          </Col> */}
          <Col className="p-5 col-md-6 register-book rounded text-light">
            <Form onSubmit={handleOnSubmit} className="bgColor p-3 rounded">
              {inputs.map((item, i) => (
                <FormComponents key={i} {...item} onChange={handleOnChange} />
              ))}
              <Form.Group className="mb-3"  onChange={handleOnChange}>
              <Form.Label>Select</Form.Label>
              <Form.Select
                defaultValue="Select Role..."
                required
                name="role"
                onChange={handleOnChange}>
                <option disabled>Select Role...</option>
                <option>Teacher</option>
                <option>Student</option>
              </Form.Select>
            </Form.Group>

              <Button className="button mt-3 " type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;