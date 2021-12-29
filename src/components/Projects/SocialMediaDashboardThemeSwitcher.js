import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/fem-24-social-media-dashboard-with-theme-switcher-master.jpg";
import * as Config from "./Config";

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
  ${Config.Projectwrapper}
  `;

const ProjectInfo = styled.div`
  ${Config.ProjectInfo}
  `;

const ProjectImage = styled.div`
  ${Config.ProjectImage}
  background-image: url(${Background});
  `;

const IconsWrapper = styled.div`
  ${Config.IconsWrapper}
`;
