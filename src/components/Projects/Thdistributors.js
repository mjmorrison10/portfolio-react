import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/thdistributors-clone.png";
import * as Config from "./Config";

function Thdistributors() {
  return (
    <Projectwrapper>
      <ProjectInfo>
        <Typography variant="h2" color="primary">total home distributors</Typography>
        <Typography variant="h3" color="secondary">
          web
        </Typography>
        <IconsWrapper>
          <ComputerOutlined color="secondary" />
          <MobileScreenShareRounded color="secondary" />
          <LanguageRounded color="secondary" />
        </IconsWrapper>
        <Typography color="secondary">
          A clone landing page using HTML, CSS, and JavaScript. 
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://bit.ly/thdistributors-mjm"
        >
          Visit Website
        </Button>
      </ProjectInfo>
      <ProjectImage />
    </Projectwrapper>
  );
}
export default Thdistributors;

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
