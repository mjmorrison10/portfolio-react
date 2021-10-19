import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import "./test.css";

function Navbar() {
  return (
    <Container>
      <Nav>
        <Button variant="contained" color="primary">
          about
        </Button>
        <Button variant="contained" color="primary">
          experience
        </Button>
        <Button variant="contained" color="primary">
          projects
        </Button>
        <Button variant="contained" color="primary">
          education
        </Button>
        <Button variant="contained" color="primary">
          contact me
        </Button>
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
  background-color: var(--bgcolor-primary);
  height: auto;
  width: 90%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    text-transform: capitalize;
    margin: 0.25rem 0;
  }
`;
