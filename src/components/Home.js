import React, { Component } from "react";
import styled from "styled-components";
import bgChristmas1 from "../assets/images/bg-christmas-3.jpg";
import ScrollText from "react-scroll-text";
import { Typography } from "@material-ui/core";
import {
  Email,
  ExpandMore,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from "@material-ui/icons";

function Home() {
  return (
    <Container>
      <Typography variant="h2" component="h1">
        Hello, I am Michael Morrison. I
      </Typography>
      {/* <ScrollText> */}
      {/* </ScrollText> */}
      <Typography>
        ...am a dedicated Web Developer. love creating with code!
      </Typography>
      <Typography>...also teach web development to people.</Typography>
      <Typography>...enjoy solving problems and debugging!</Typography>
      <Typography>...am dedicated to learning as much as possible!</Typography>
      <SocialMedia>
        <Facebook fontSize="large" />
        <Instagram fontSize="large" />
        <GitHub fontSize="large" />
        <LinkedIn fontSize="large" />
        <Email fontSize="large" />
      </SocialMedia>
      <BottomWrapper>
        <ExpandMoreWrapper>
          <ExpandMore />
        </ExpandMoreWrapper>
      </BottomWrapper>
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
    margin-top: 8rem;
    font-weight: 900;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: var(--accent-color-primary);
    transition: 250ms ease-in-out;
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
    transition: 250ms ease-in-out;
    &:hover {
      -webkit-text-stroke-color: var(--accent-color-secondary);
    }
  }
`;

const SocialMedia = styled.div``;

const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
`;

const ExpandMoreWrapper = styled.div`
  cursor: pointer;
  transition: 250ms ease-in-out;
  &:hover {
    transform: scale(2);
  }
`;
