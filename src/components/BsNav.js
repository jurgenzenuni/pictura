import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import Search3 from "./Searchcaro";

function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'rgb(241, 241, 241)' }}>
      <Navbar.Brand href="#home" className="navlink2" style={{ paddingLeft: '7px' }}>
        <i className="ri-contrast-drop-line">
          {" "}
          <span> PICTURA </span>
        </i>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle">
        <i className="ri-menu-4-fill"></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ms-auto navlink">
          {/* <Nav.Link className="navlink3" href="#user" >
            <i className="ri-user-fill"></i> <span> SIGN IN </span>
          </Nav.Link> */}
          {/* <Nav.Link href="/login.html">
            <span>Login</span>
          </Nav.Link> */}
          <Nav.Link href="/about.html" className="about-link" style={{ marginLeft: '10px', marginRight: '10px', paddingLeft: '21px' }}>
            <span> ABOUT </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
