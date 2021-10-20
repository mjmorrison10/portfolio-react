import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import OSRSImage from "../../assets/images/project1.png";

function OSRS() {
  return (
    <Projectwrapper>
      <ProjectInfo>
        <Typography variant="h2">Oldschool RuneScape Clone</Typography>
        <Typography variant="h3" color="primary">
          web
        </Typography>
        <IconsWrapper>
          <ComputerOutlined color="primary" />
          <MobileScreenShareRounded color="primary" />
          <LanguageRounded color="primary" />
        </IconsWrapper>
        <Typography>
          Based on the Old School RuneScape Website, compliments to JaGeX, I
          developed a clone replica of the landing page.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://bit.ly/osrs-clone"
        >
          Visit Website
        </Button>
      </ProjectInfo>
      <ProjectImage />
    </Projectwrapper>
  );
}

export default OSRS;

const Projectwrapper = styled.div`
  margin: 0 2rem;
  padding: 1rem;
  display: flex;
  height: 50vh;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
`;

const ProjectInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
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
    align-self: center;
    font-size: 1.5em;
    color: var(--accent-color-secondary);
    margin-bottom: 0.5em;
    font-weight: 500;
    width: 75%;
  }
  a {
    align-self: flex-end;
  }
`;

const ProjectImage = styled.div`
  margin-left: 1em;
  flex: 1;
  background-image: url(${OSRSImage});
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
