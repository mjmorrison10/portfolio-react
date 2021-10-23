import { Typography } from "@material-ui/core";
import { Computer, ExpandMore, Star, Storage, Sync } from "@material-ui/icons";
import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Background from "../assets/images/bg-orange-1.jpg";

// fdsdytdsfsfdsdsdsd

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
    /* color: var(--accent-color-dark); */
    margin-top: 5rem;
    font-weight: bold;
  }
  p {
    /* color: var(--accent-color-dark); */
    font-weight: bolder;
  }
`;

const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 2rem;
  h2 {
    /* text-shadow: -2px 0 rgba(255, 255, 255, 0.5), 0 2px rgba(255, 255, 255, 0.5),
      2px 0 rgba(255, 255, 255, 0.5), 0 -2px rgba(255, 255, 255, 0.5); */

    margin-top: 1rem;
    /* color: var(--accent-color-primary); */
    /* font-weight: 700; */
  }
  li {
    /* text-shadow: -1px 0 rgba(255, 255, 255, 0.5), 0 1px rgba(255, 255, 255, 0.5),
      1px 0 rgba(255, 255, 255, 0.5), 0 -1px rgba(255, 255, 255, 0.5); */

    list-style-type: none;
    /* color: var(--accent-color-secondary); */
    /* font-weight: 700; */
    margin-top: 1rem;
  }
  /* 4545651 */
  svg {
    /* color: var(--accent-color-primary); */
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
