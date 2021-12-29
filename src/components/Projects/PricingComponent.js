import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/fem-26-challenge.jpg";
import * as Config from "./Config";


function PricingComponent() {
    return (
        <Projectwrapper>
        <ProjectInfo>
          <Typography variant="h2" color="primary">
          Pricing component with toggle
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
            Frontend Challenge 26: This challenge will get you thinking about building an accessible custom toggle control and also test your layout skills.
  
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://bit.ly/fem-26-mjm-site"
          >
            Visit Website
          </Button>
        </ProjectInfo>
        <ProjectImage />
      </Projectwrapper>
    )
}

export default PricingComponent


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
