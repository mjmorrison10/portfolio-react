import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/fem-24-social-media-dashboard-with-theme-switcher-master.jpg";

function SocialMediaDashboardThemeSwitcher() {
    return (
        <Projectwrapper>
        <ProjectInfo>
          <Typography variant="h2" color="primary">
          Social media dashboard with theme switcher
          </Typography>
          <Typography variant="h3" color="secondary">
            web
          </Typography>
          <IconsWrapper>
            <ComputerOutlined color="secondary" />
            <MobileScreenShareRounded color="secondary" />
            <LanguageRounded color="secondary" />
          </IconsWrapper>
          <Typography color="secondary">
            Frontend Challenge 24: This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://bit.ly/fem-24-mjm-site"
          >
            Visit Website
          </Button>
        </ProjectInfo>
        <ProjectImage />
      </Projectwrapper>
    )
}

export default SocialMediaDashboardThemeSwitcher


const Projectwrapper = styled.div`
  display: flex;
  border-radius: var(--border-radius);
  -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
  @media (max-width: 680px) {
    flex-direction: column;
  }
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
    /* color: var(--accent-color-dark); */
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
    /* color: var(--accent-color-secondary); */
    margin-bottom: 0.5em;
    font-weight: 500;
    max-width: 45ch;
  }
  a {
    align-self: flex-end;
  }
`;

const ProjectImage = styled.div`
  margin-left: 1em;
  height: 40em;
  flex: 1;
  background-image: url(${Background});
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: contain;
  transition: 250ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 680px) {
    flex: auto;
    height: 20em;
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