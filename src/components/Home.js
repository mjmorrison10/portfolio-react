import React, { Component } from "react";
import styled from "styled-components";
import bgChristmas1 from "../assets/images/bg-october-2.jpg";
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
    <Container id="home" >
      <Typography variant="h2" component="h1" color="primary">
        Hello, I am Michael Morrison. I
      </Typography>
      <Typography color="secondary">
        ...am a dedicated Web Developer. love creating with code!
      </Typography>
      <Typography color="secondary">...also teach web development to people.</Typography>
      <Typography color="secondary">...enjoy solving problems and debugging!</Typography>
      <Typography color="secondary">...am dedicated to learning as much as possible!</Typography>
      <SocialMedia>

        <Facebook color='primary' fontSize="large" onClick={() => window.open('https://bit.ly/facebook-mjm', '_blank')} />
        
        <Instagram color='primary' fontSize="large" onClick={() => window.open('https://bit.ly/instagram-mjm', '_blank')} />
        
        <GitHub color='primary' fontSize="large" onClick={() => window.open('https://bit.ly/github-mjm', '_blank')} />
        
        <LinkedIn color='primary' fontSize="large" onClick={() => window.open('https://bit.ly/linkedin-mjm', '_blank')} />
        
        <Email color='primary' fontSize="large" onClick={() => window.open('mailto:mjmorrison10@outlook.com', '_blank')} />
      
      </SocialMedia>
      <BottomWrapper>
        <ExpandMoreWrapper>
          <ExpandMore color="primary"/>
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
    text-shadow: -2px 0 rgba(255, 255, 255, 0.5), 0 2px rgba(255, 255, 255, 0.5), 2px 0 rgba(255, 255, 255, 0.5), 0 -2px rgba(255, 255, 255, 0.5);

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
    text-shadow: -1.5px 0 rgba(255, 255, 255, 0.5), 0 1.5px rgba(255, 255, 255, 0.5), 1.5px 0 rgba(255, 255, 255, 0.5), 0 -1.5px rgba(255, 255, 255, 0.5);

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

const SocialMedia = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 50%;
  flex: 1;
  color: var(--bgcolor-secondary);
  stroke: var(--accent-color-primary);
  stroke-width: 1px;
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
