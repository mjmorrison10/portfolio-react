import { Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Background from "../assets/images/bg-thanksgivings-5.jpg";
import CustomProjects from "./CustomProjects";

function Projects() {
  return (
    <Container id="projects">
      <Typography variant="h2" component="h1" color="primary">
        Projects
      </Typography>
      <Typography variant="p" component="h3" color="secondary">
        Here are some of my projects!
      </Typography>
      <CustomProjects />
      <BottomWrapper>
        <ExpandMoreWrapper>
          <Link to="education" smooth={true}>
            <ExpandMore color="primary" />
          </Link>
        </ExpandMoreWrapper>
      </BottomWrapper>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  padding-bottom: 15rem;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Background});
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 4rem;
  text-align: center;
  h1 {
    padding-top: 4rem;
    /* color: var(--accent-color-dark); */
    font-weight: 500;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
  }
  h2 {
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
  }
  h3 {
    /* color: var(--accent-color-dark); */
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
    margin-bottom: 1rem;
    font-size: 1.25em;
  }
  p {
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


const BottomWrapper = styled.div`
  /* display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1; */
`;

const ExpandMoreWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
  cursor: pointer;
  transition: 250ms ease-in-out;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  &:hover {
    transform: scale(2);
  }
`;
