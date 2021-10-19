import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  ExpandMore,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import THDistributors from "../assets/images/thdistributors-clone.png";
import MichaelJobs from "../assets/images/project3.png";

function CustomProjects() {
  return (
    <Container>
      <Projectwrapper>
        <ProjectInfo>
          <Typography variant="h2">total home distributors</Typography>
          <Typography variant="h3" color="primary">
            web
          </Typography>
          <IconsWrapper>
            <ComputerOutlined color="primary" />
            <MobileScreenShareRounded color="primary" />
            <LanguageRounded color="primary" />
          </IconsWrapper>
          <Typography>
            A clone website utilizing HTML, CSS, and JavaScript.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://bit.ly/thdistributors-mjm"
          >
            Visit Website
          </Button>
        </ProjectInfo>
        <ProjectImage />
      </Projectwrapper>

      <Projectwrapper>
        <ProjectInfo>
          <Typography variant="h2">michael jobs</Typography>
          <Typography variant="h3" color="primary">
            web
          </Typography>
          <IconsWrapper>
            <ComputerOutlined color="primary" />
            <MobileScreenShareRounded color="primary" />
            <LanguageRounded color="primary" />
          </IconsWrapper>
          <Typography>
            Search for Software Developer career opportunities using Michael
            Jobs.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://bit.ly/live-developer-jobs"
          >
            Visit Website
          </Button>
        </ProjectInfo>
        <ProjectImage2 />
      </Projectwrapper>
    </Container>
  );
}


export default CustomProjects;

const Projectwrapper = styled.div`
  width: 90%;
  padding: 1rem;
  display: flex;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ProjectInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 1em;
  h2 {
    align-self: center;
    text-transform: capitalize;
    font-size: 2em;
    font-weight: 700;
    color: var(--accent-color-dark);
    margin-bottom: 0.5em;
  }
  h3 {
    align-self: flex-end;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 900;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.5em;
    color: var(--accent-color-secondary);
    margin-bottom: 0.5em;
    font-weight: 500;
    width: 100%;
  }
`;

const ProjectImage = styled.div`
  margin-left: 1em;
  flex: 1;
  height: 100%;
  background-image: url(${THDistributors});
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: contain;
  transition: 250ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage2 = styled.div`
  margin-left: 1em;
  flex: 1;
  height: 100%;
  background-image: url(${MichaelJobs});
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: contain;
  transition: 250ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  svg {
    margin-bottom: 0.5em;
  }
`;