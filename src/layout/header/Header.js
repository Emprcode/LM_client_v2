import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container className="">
        <Navbar.Brand href="">
          <img
            src={logo}
            alt="logo"
            className="fw-bold"
            width="110px"
            height="70px"
          />
          <span className="head h3">Finance Management</span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto h4 gap-3">
            <Link to="/notification" className="nav-link">
              <i className="fa-solid fa-bell"></i>
            </Link>{" "}
            <Link to="/" className="nav-link">
              <i className="fa-solid fa-right-from-bracket"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
