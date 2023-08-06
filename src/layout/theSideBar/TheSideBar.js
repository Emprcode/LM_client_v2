import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { PiBooksFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./TheSidebar.css";
import person from "../../assets/person.png";

export const TheSidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sidebar">
      <Button variant="none" className="p-4" onClick={handleShow}>
        <GiHamburgerMenu size={30} />
      </Button>
      <div className="p-4 d-flex flex-column gap-5">
        <Link to="/dashboard" className="nav-link ">
          {" "}
          <RxDashboard size={30} />
        </Link>
        <Link to="/all-books" className="nav-link ">
          {" "}
          <PiBooksFill size={30} />
        </Link>
        <Link to="/my-books" className="nav-link ">
          {" "}
          <FaBook size={30} />
        </Link>
        <Link to="/add-books" className="nav-link ">
          {" "}
          <BiBookmarkAltPlus size={30} />
        </Link>
        <Link to="/profile" className="nav-link ">
          {" "}
          <BiSolidUserCircle size={30} />
        </Link>
        <Link to="/setting" className="nav-link ">
          {" "}
          <AiFillSetting size={30} />
        </Link>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="d-flex align-items-center gap-3">
            <img src={person} alt="person" height="90px" width="90px" />
            <h2 className="fw-bold">John Doe</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="p-4 d-flex flex-column gap-5">
            <Link
              to="/dashboard"
              className="nav-link d-flex align-items-center gap-3">
              {" "}
              <RxDashboard size={35} /> <h3>Dashboard</h3>
            </Link>
            <Link
              to="/all-books"
              className="nav-link d-flex align-items-center gap-3">
              {" "}
              <PiBooksFill size={35} /> <h3>All Books</h3>
            </Link>
            <Link
              to="/borrowed-books"
              className="nav-link d-flex align-items-center gap-3">
              {" "}
              <FaBook size={35} /> <h3>Borrowed Books</h3>
            </Link>
            <Link
              to="/add-books"
              className="nav-link d-flex align-items-center gap-3">
              {" "}
              <BiBookmarkAltPlus size={35} /> <h3>Add Books</h3>
            </Link>
            <Link
              to="/profile"
              className="nav-link d-flex align-items-center gap-3">
              {" "}
              <BiSolidUserCircle size={35} /> <h3>Profile</h3>
            </Link>
            <Link
              to="/setting"
              className="nav-link d-flex align-items-center gap-3">
              {" "}
              <AiFillSetting size={35} /> <h3>Settings</h3>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
