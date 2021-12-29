import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/sunnyside.png";
import * as Config from "./Config";

function Sunnyside() {
  return (
    <Projectwrapper>
      <ProjectInfo>
        <Typography variant="h2" color="primary">
          sunnyside agency landing page
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
        Frontend Challenge 16: This challenge will be a perfect test of your layout and responsive
          skills. There's a tiny bit of JS for the mobile menu, but the focus is
          HTML and CSS.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://bit.ly/fem-16-mjm-site"
        >
          Visit Website
        </Button>
      </ProjectInfo>
      <ProjectImage />
    </Projectwrapper>
  );
}

export default Sunnyside;

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
