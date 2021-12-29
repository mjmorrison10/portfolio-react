import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/forkify.png";
import * as Config from "./Config";

function Forkify() {
  return (
    <Projectwrapper>
      <ProjectInfo>
        <Typography variant="h2" color="primary">
          Forkify - Search over 1m recipes!
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
          Zero to Expert JavaScript course. In this project, we learned
          Asynchronous JavaScript, Promises, Async, Await, and AJAX! In
          addition, we learned modern JavaScript development skills (using MVC
          for an architecture), and many more! Still updating!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://bit.ly/forkify-ss"
        >
          Visit Website
        </Button>
      </ProjectInfo>
      <ProjectImage />
    </Projectwrapper>
  );
}

export default Forkify;

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
