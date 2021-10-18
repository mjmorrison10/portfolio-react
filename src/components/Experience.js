import { Typography } from "@material-ui/core";
import { pink, red } from "@material-ui/core/colors";
import { Computer, ExpandMore, Star, Storage, Sync } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../assets/images/bg-white-1.jpg";

function Experience() {
  return (
    <Container>
      <Typography variant="h2" component="h1">
        My Experience
      </Typography>
      <Typography>Determined to be the best!</Typography>
      <Skills>
        <Frontend>
          <Computer fontSize="large" htmlColor="var(--accent-color-primary)" />
          <Typography variant="h3" component="h2">
            Front-end
          </Typography>
          <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
          </ol>
          <Sync fontSize="large" htmlColor="var(--accent-color-primary)" />
        </Frontend>
        <Backend>
          <Storage fontSize="large" htmlColor="var(--accent-color-primary)" />
          <Typography variant="h3" component="h2">
            Back-end
          </Typography>
          <ol>
            <li>Firestore</li>
            <li>Firebase</li>
          </ol>
          <Sync fontSize="large" htmlColor="var(--accent-color-primary)" />
        </Backend>
        <Tools>
          <Star fontSize="large" htmlColor="var(--accent-color-primary)" />
          <Typography variant="h3" component="h2">
            Tools
          </Typography>
          <ol>
            <li>Git</li>
            <li>VSCode</li>
            <li>Github Desktop</li>
          </ol>
          <Sync fontSize='large' htmlColor="var(--accent-color-primary)" />
        </Tools>
      </Skills>
      <BottomWrapper>
        <ExpandMoreWrapper>
          <ExpandMore />
        </ExpandMoreWrapper>
      </BottomWrapper>
    </Container>
  );
}

export default Experience;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${Background});
  background-repeat: no-repeat, no-repeat;
  background-position: 100% 25%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    margin-top: 5rem;
  }
`;

const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 2rem;
`;
const Frontend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  li {
    list-style-type: none;
  }
`;
const Backend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  li {
    list-style-type: none;
  }
`;
const Tools = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  li {
    list-style-type: none;
  }
`;

const BottomWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const ExpandMoreWrapper = styled.div`
  cursor: pointer;
  transition: 250ms ease-in-out;
  color: var(--accent-color-dark);
  &:hover {
    transform: scale(2);
  }
`;
