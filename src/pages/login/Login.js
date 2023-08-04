import React, { useEffect, useRef } from "react";
import { Row, Col, Container, Form, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FormComponents } from "../../components/formComponents/FormComponents";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../redux/user/UserAction";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isLoggedIn, isLoading} = useSelector((state) => state.user)

useEffect(() => {
  isLoggedIn && navigate("/dashboard")
}, [isLoggedIn, navigate])

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
    dispatch(userLoginAction(obj));
    
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
                  Submit<span>{isLoading && <Spinner variant="border" />}</span>
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
