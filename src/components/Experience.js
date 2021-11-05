import { Typography } from "@material-ui/core";
import { Computer, ExpandMore, Star, Storage, Sync } from "@material-ui/icons";
import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Background from "../assets/images/bg-thanksgivings-7.jpg";


function Experience() {
  return (
    <Container id="experience">
      <Typography variant="h2" component="h1" color="primary">
        My Experience
      </Typography>
      <Typography color="secondary">Determined to be the best!</Typography>
      <Skills>
        <Frontend>
          <Computer color="primary" />
          <Typography variant="h3" component="h2" color="secondary">
            Front-end
          </Typography>
          <Typography color="secondary">
            <ol>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>React JS</li>
            </ol>
          </Typography>
          <SyncWrapper>
            <SyncWrap>
              <Sync color="primary" />
            </SyncWrap>
          </SyncWrapper>
        </Frontend>
        <Backend>
          <Storage color="primary" />
          <Typography variant="h3" component="h2" color="secondary">
            Back-end
          </Typography>
          <Typography color="secondary">
            <ol>
              <li>Firestore</li>
              <li>Firebase</li>
            </ol>
          </Typography>
          <SyncWrapper>
            <SyncWrap>
              <Sync color="primary" />
            </SyncWrap>
          </SyncWrapper>
        </Backend>
        <Tools>
          <Star color="primary" />
          <Typography variant="h3" component="h2" color="secondary">
            Tools
          </Typography>
          <Typography color="secondary">
            <ol>
              <li>Git</li>
              <li>VSCode</li>
              <li>Github Desktop</li>
            </ol>
          </Typography>
          <SyncWrapper>
            <SyncWrap>
              <Sync color="primary" />
            </SyncWrap>
          </SyncWrapper>
        </Tools>
      </Skills>
      <BottomWrapper>
        <ExpandMoreWrapper>
          <Link to="projects" smooth={true}>
            <ExpandMore color="primary" />
          </Link>
        </ExpandMoreWrapper>
      </BottomWrapper>
    </Container>
  );
}

export default Experience;

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Background});
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
  h1,
  h2,
  h3,
  p {
    text-align: center;
  }
  p {
    font-size: 1.5em;
    font-weight: 900;
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

const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin-top: 2rem;
  h2 {
    margin-top: 1rem;
  }
  li {
    list-style-type: none;
    margin-top: 1rem;
  }
  svg {
    font-size: 4rem;
    /* filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7)); */
    /* -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7)); */
  }
  ol {
    margin: 0px;
    padding: 0px;
  }
  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
    ol {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    li {
      display: flex;
      justify-content: center;
      margin: 0 0.5rem;
    }
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
