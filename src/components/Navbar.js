import { Button } from "@material-ui/core";
import React, { useRef } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import "./test.css";


function Navbar() {
  // const articleRef = useRef();

  // function handleBackClick() {
  //   articleRef.current.scrollIntoView({ behavior: "smooth" });
  // }
  return (
    <Container>
      <Nav>
        <Link to="home" smooth={true}>
          <Button variant="contained" color="primary">
            home
          </Button>
        </Link>

        <Link to="experience" smooth={true}>
          <Button variant="contained" color="primary">
            experience
          </Button>
        </Link>

        <Link to="projects" smooth={true}>
          <Button variant="contained" color="primary">
            projects
          </Button>
        </Link>

        <Link to="education" smooth={true}>
          <Button variant="contained" color="primary">
            education
          </Button>
        </Link>

        <Link to="contact" smooth={true}>
          <Button variant="contained" color="primary">
            contact me
          </Button>
        </Link>

        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open("https://bit.ly/MJMPortfolio", "_blank")}
        >
          Old Site
        </Button>
      </Nav>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.button`
  /* background-color: var(--bgcolor-primary); */
  background: transparent;
  height: auto;
  width: 90%;
  border: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  button {
    text-transform: capitalize;
    margin: 0.25rem 0.5rem;
  }
`;
