import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/whichbank.png";
import * as Config from "./Config";

// Zero to Expert JavaScript course. In this project I learned and more.


function Whichbank() {
    return (
        <Projectwrapper>
        <ProjectInfo>
          <Typography variant="h2" color="primary">
            Bankist App
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
            Zero to Expert JavaScript course. In this project I learned plenty about working with arrays, numbers, dates, internationalization, timer, login and more.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://whichbank.netlify.app/"
          >
            Visit Website
          </Button>
        </ProjectInfo>
        <ProjectImage />
      </Projectwrapper>
    )
}

export default Whichbank

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
