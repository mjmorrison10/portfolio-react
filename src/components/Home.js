import React, { Component } from "react";
import styled from "styled-components";
import Background from "../assets/images/bg-thanksgivings-8.png";
import { Typography } from "@material-ui/core";
import {
  Email,
  ExpandMore,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from "@material-ui/icons";
import { Link } from "react-scroll";

function Home() {
  return (
    <Container id="home">
      <Typography variant="h2" component="h1" color="primary" align="center">
        Hello, I am Michael Morrison. I
      </Typography>
      <Typography color="secondary">
        ...am a dedicated Web Developer. love creating with code!
      </Typography>
      <Typography color="secondary">
        ...also teach web development to people.
      </Typography>
      <Typography color="secondary">
        ...enjoy solving problems and debugging!
      </Typography>
      <Typography color="secondary">
        ...am dedicated to learning as much as possible!
      </Typography>
      

      <SocialMedia>
        <Facebook
          color="primary"
          mater
          fontSize="large"
          onClick={() => window.open("https://bit.ly/facebook-mjm", "_blank")}
        />

        <Instagram
          color="primary"
          fontSize="large"
          onClick={() => window.open("https://bit.ly/instagram-mjm", "_blank")}
        />

        <GitHub
          color="primary"
          fontSize="large"
          onClick={() => window.open("https://bit.ly/github-mjm", "_blank")}
        />

        <LinkedIn
          color="primary"
          fontSize="large"
          onClick={() => window.open("https://bit.ly/linkedin-mjm", "_blank")}
        />

        <Email
          color="primary"
          fontSize="large"
          onClick={() =>
            window.open("mailto:mjmorrison10@outlook.com", "_blank")
          }
        />
      </SocialMedia>
      <BottomWrapper>
        <ExpandMoreWrapper>
          <Link to="experience" smooth={true}>
            <ExpandMore color="primary" />
          </Link>
        </ExpandMoreWrapper>
      </BottomWrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: rgb(255, 255, 255);
  background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),  url(${Background});
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--bgcolor-secondary);
  padding-top: 5rem;
  h1 {
    border-radius: var(--border-radius);
    padding: 0 0.2em;
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
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: var(--accent-color-primary);
    width: 75%;
    text-align: center;
    padding-top: 1rem;
    transition: 250ms ease-in-out;
    &:hover {
      -webkit-text-stroke-color: var(--accent-color-secondary);
    }
  }
  @media (max-width: 816px) {
    padding-top: 6rem;
  }
  @media (max-width: 432px) {
    padding-top: 9rem;
  }
  @media (max-width: 291px) {
    padding-top: 12rem;
  }
  @media (max-width: 282px) {
    padding-top: 15rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 80%;
  flex: 1;
  color: var(--bgcolor-secondary);
  stroke: var(--accent-color-primary);
  stroke-width: 1px solid;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  svg {
    transition: 250ms ease-in-out;
  }
  svg:hover {
    stroke: var(--accent-color-secondary);
    cursor: pointer;
    transform: scale(1.25);
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
`;

const ExpandMoreWrapper = styled.div`
  cursor: pointer;
  transition: 250ms ease-in-out;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  &:hover {
    transform: scale(2);
  }
`;
