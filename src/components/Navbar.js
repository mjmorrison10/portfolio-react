import React from "react";
import styled from "styled-components";
import "./test.css";

function Navbar() {
  return (
    <Container>
      <Nav>
        <ol>
          <li>about</li>
          <li>experience</li>
          <li>projects</li>
          <li>education</li>
          <li>contact me</li>
          <li>resume</li>
        </ol>
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
  height: auto;
  background-color: var(--bgcolor-primary);
  width: 90%;
  border: none;
  ol {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    text-transform: capitalize;
    @media (max-width: 650px) {
        flex-wrap: wrap;
    }
  }
  li {
    color: red;
    background-color: hsl(0, 0%, 100%);
    border: 2px solid hsl(0, 0%, 100%);
    padding: 0.25em 0.5em;
    margin: 0.5em 0;
    border-radius: var(--border-radius);
    font-size: 1.25em;
    font-weight: 700;
    cursor: pointer;
    transition: 250ms ease-in-out;
    @media (max-width: 650px) {
      margin: 0.5em 0.2em;
      height: auto;
    }
  }
  li:hover {
    transform: scale(1.05);
    color: hsl(120, 100%, 25%);
    background-color: hsl(0, 0%, 75%);
    border: 2px solid hsl(0, 0%, 100%);
  }
`;
