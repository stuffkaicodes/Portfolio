import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImLinkedin  } from "react-icons/im";
import { IoLogoGithub } from 'react-icons/io';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Nav.Item>
          <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
            <AiOutlineHome style={{ color: "white", marginBottom: "2px" }} />
          </Nav.Link>
        </Nav.Item>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineBook style={{ marginBottom: "2px" }} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
              href='https://github.com/stuffkaicodes?tab=repositories'
              target="_blank"
              rel="noreferrer">
                <IoLogoGithub style={{marginBottom: "2px", size: "8rem", marginRight:'0.75rem'}} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
              href='https://www.linkedin.com/in/phyllis-l-51302b281/'
              target="_blank"
              rel="noreferrer">
                <ImLinkedin style={{marginBottom: "2px", size: "8rem", marginRight:'0.75rem'}} /> 
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
