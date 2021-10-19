import { Typography } from "@material-ui/core";
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
          <Computer />
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
          <SyncWrapper>
            <SyncWrap>
              <Sync />
            </SyncWrap>
          </SyncWrapper>
        </Frontend>
        <Backend>
          <Storage />
          <Typography variant="h3" component="h2">
            Back-end
          </Typography>
          <ol>
            <li>Firestore</li>
            <li>Firebase</li>
          </ol>
          <SyncWrapper>
            <SyncWrap>
              <Sync />
            </SyncWrap>
          </SyncWrapper>
        </Backend>
        <Tools>
          <Star />
          <Typography variant="h3" component="h2">
            Tools
          </Typography>
          <ol>
            <li>Git</li>
            <li>VSCode</li>
            <li>Github Desktop</li>
          </ol>
          <SyncWrapper>
            <SyncWrap>
              <Sync />
            </SyncWrap>
          </SyncWrapper>
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
    color: var(--accent-color-dark);
    margin-top: 5rem;
    font-weight: bold;
  }
  p {
    color: var(--accent-color-dark);
    font-weight: bolder;
  }
`;

const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 2rem;
  h2 {
    margin-top: 1rem;
    color: var(--accent-color-primary);
    font-weight: 700;
  }
  li {
    list-style-type: none;
    color: var(--accent-color-secondary);
    font-weight: 700;
    margin-top: 1rem;
  }
  svg {
    color: var(--accent-color-primary);
    font-size: 4rem;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  }
`;

const Frontend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Backend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Tools = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BottomWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
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

const SyncWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const SyncWrap = styled.div`
  margin-top: 1rem;
  animation: rotate 1.5s linear infinite;
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
