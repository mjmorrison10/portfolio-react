import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/fem-25-insure-landing-page-master.jpg";
import * as Config from "./Config";

function InsureLandingPage() {
  return (
    <Projectwrapper>
      <ProjectInfo>
        <Typography variant="h2" color="primary">
        Insure landing page
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
          Frontend Challenge 25: Test your layout skills with this HTML & CSS only landing page. This challenge is perfect if you're starting to get confident in laying out web pages.


        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://bit.ly/fem-25-mjm-site"
        >
          Visit Website
        </Button>
      </ProjectInfo>
      <ProjectImage />
    </Projectwrapper>
  );
}

export default InsureLandingPage;

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
