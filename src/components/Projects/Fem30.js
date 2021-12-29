import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/fem-30-challenge.jpg";
import * as Config from "./Config";

function Fem30() {
  return (
    <Projectwrapper>
      <ProjectInfo>
        <Typography variant="h2" color="primary">
        Fylo dark theme landing page
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
          Frontend Challenge 30: This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and/or Grid skills.

        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://bit.ly/fem-30-mjm-site"
        >
          Visit Website
        </Button>
      </ProjectInfo>
      <ProjectImage />
    </Projectwrapper>
  );
}

export default Fem30;

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
