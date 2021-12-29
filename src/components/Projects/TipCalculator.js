import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/fem-15-tip-calculator-app-main.jpg";
import * as Config from "./Config";

function TipCalculator() {
  return (
    <Projectwrapper>
      <ProjectInfo>
        <Typography variant="h2" color="primary">
          Tip Calculator app
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
          This small app is perfect for anyone starting to get to grips with
          JavaScript. The calculator functionality will be a nice test!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://bit.ly/fem-15-mjm-site"
        >
          Visit Website
        </Button>
      </ProjectInfo>
      <ProjectImage />
    </Projectwrapper>
  );
}

export default TipCalculator;

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
