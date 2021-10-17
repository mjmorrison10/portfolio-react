import React from "react";
import styled from "styled-components";
import webDev from "../assets/images/web-dev.png";
import Navbar from "./Navbar";
import "./test.css";

function Header() {
  return (
    <Container>
      <Wrapper>
        <WebDev />
        <Navbar />
      </Wrapper>
    </Container>
  );
}
export default Header;

const Container = styled.header`
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  justify-content: center;
`;

const Wrapper = styled.div`
  border-radius: var(--border-radius);
  background-color: var(--bgcolor-primary);
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WebDev = styled.img`
  display: flex;
  background-image: url(${webDev});
  height: 9.375rem;
  width: 90%;
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: contain;
  transition: 250ms ease-in-out;
  &:hover {
    width: 95%;
  }
  @media (max-width: 700px) {
    height: 9rem;
  }
  @media (max-width: 400px) {
    height: 8rem;
  }
  @media (max-width: 350px) {
    height: 7.5rem;
  }
  @media (max-width: 300px) {
    height: 7rem;
  }
`;
