import { Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../assets/images/bg-white-2.jpg";
import CustomProjects from "./CustomProjects";

function Projects() {
  return (
    <Container>
      <Typography variant="h2" component="h1">
        Projects
      </Typography>
      <Typography variant="p" component="h3">
        Here are some of my projects!
      </Typography>
      <CustomProjects />
      <BottomWrapper>
        <ExpandMoreWrapper>
          <ExpandMore />
        </ExpandMoreWrapper>
      </BottomWrapper>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${Background});
  background-repeat: no-repeat, no-repeat;
  background-position: 0% 0%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4rem;
  h1 {
    color: var(--accent-color-dark);
    font-weight: 500;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
  }
  h2 {
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
  }
  h3 {
    color: var(--accent-color-dark);

    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
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
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  &:hover {
    transform: scale(2);
  }
`;
