import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
// import { LogoutUserProfileAction } from "../../redux/user/UserAction";

export const Header = () => {

  const dispatch = useDispatch()

  // const handleOnLogout = () => {
  //   dispatch(LogoutUserProfileAction())
  // }
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container className="p-3">
        <Navbar.Brand href="">
          <span className="head">Library Management</span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto h4 gap-3">
            <Link to="/notification" className="nav-link">
              <i className="fa-solid fa-bell"></i>
            </Link>{" "}
            <Link to="/" className="nav-link" >
              <i className="fa-solid fa-right-from-bracket"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
