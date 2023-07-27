import React, { useRef } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import { loginUser } from "../components/helper/axiosHelper";
import { toast } from "react-toastify";
import { FormComponents } from "../../components/formComponents/FormComponents";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();
  const inputs = [
    {
      email: "email",
      type: "email",
      label: "Email",
      placeholder: "Jack@gmail.com",
      required: true,
      forwardRef: emailRef,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "*****",
      required: true,
      forwardRef: passRef,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    //   const {status, message, result} = await loginUser(obj)
    //   console.log(result)
    //  toast[status](message)
    //  if (status === "success" && result?._id) {
    //   sessionStorage.setItem("user", JSON.stringify(result))
    //   localStorage.setItem("user", JSON.stringify(result))
    //   navigate("/dashboard")
    //  }
  };

  return (
    <div className="bg-color d-flex justify-content-center align-items-center">
      <Container className="p-5 ">
        <Row className="mt-3 shadow-lg flex-wrap">
          <Col className="p-4 text-center fw-bold books d-flex align-items-center rounded">
            <div className="p-5 title text-light rounded">
              <h1 className="mb-3 fw-bold"> Library Management</h1>

              <p> Please Login Here </p>
            </div>
          </Col>
          <Col className="mx-4 p-5">
            <div className="p-5">
              <Form onSubmit={handleOnSubmit}>
                {inputs.map((item, i) => (
                  <FormComponents key={i} {...item} />
                ))}

                <Button className="button mt-3 " type="submit">
                  Submit
                </Button>
                <hr />
                <div className="text-end">
                  <Link to="/register" className="nav-link fw-bold">
                    {" "}
                    Register new account?
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
