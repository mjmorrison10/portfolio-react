import React, { Component } from "react";
import styled from "styled-components";
import bgChristmas1 from "../assets/images/bg-christmas-3.jpg";
import ScrollText from "react-scroll-text";

function Home() {
  return (
    <Container>
      <h1>Hello, I am Michael Morrison. I </h1>
      {/* <ScrollText> */}
      {/* </ScrollText> */}
      <p>...am a dedicated Web Developer. love creating with code!</p>
      <p>...also teach web development to people.</p>
      <p>...enjoy solving problems and debugging!</p>
      <p>...am dedicated to learning as much as possible!</p>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-image: url(${bgChristmas1});
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--bgcolor-secondary);
  h1 {
    font-size: 3rem;
    font-weight: 900;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: var(--accent-color-primary);
    &:hover {
      -webkit-text-stroke-color: var(--accent-color-secondary);
    }
  }
  p {
    font-size: 1.8rem;
    font-weight: 700;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: var(--accent-color-primary);
    width: 75%;
    text-align: center;
    margin-top: 1rem;
    &:hover {
      -webkit-text-stroke-color: var(--accent-color-secondary);
    }
  }
`;
