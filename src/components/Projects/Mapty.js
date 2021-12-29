import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/whichbank-landing.png";
import * as Config from "./Config";

function Mapty() {
    return (
        <Projectwrapper>
        <ProjectInfo>
          <Typography variant="h2" color="primary">
            Mapty
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
            Zero to Expert JavaScript course. In this project, we learned Object Oriented Programming and developed a working application utilizing this knowledge. In addition to Object Oriented Programming, we learned how to use built-in APIs like geolocation, and local storage. Log your work outs (Running/Cycling)! 
          </Typography>
          <Button
            variant="contained"
            color="primary"
          href="https://mapty-ss.netlify.app/"

          >
            Visit Website
          </Button>
        </ProjectInfo>
        <ProjectImage />
      </Projectwrapper>
    )
}

export default Mapty

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
