import { Button, Typography } from "@material-ui/core";
import {
  ComputerOutlined,
  LanguageRounded,
  MobileScreenShareRounded,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import OSRSImage from "../../assets/images/project1.png";

function OSRS() {
  return (
    <Projectwrapper>
      <ProjectInfo>
        <Typography variant="h2" color="primary">
          Oldschool RuneScape Clone
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
          Based on the Old School RuneScape Website, compliments to JaGeX, I
          developed a clone replica of the landing page.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://bit.ly/osrs-clone"
        >
          Visit Website
        </Button>
      </ProjectInfo>
      <ProjectImage>
        <img src={OSRSImage} alt="OSRS" />
      </ProjectImage>
    </Projectwrapper>
  );
}

export default OSRS;

const Projectwrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    flex-direction: column;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 1em;
  h2 {
    align-self: center;
    text-transform: capitalize;
    font-size: 2em;
    font-weight: 700;
    /* color: var(--accent-color-dark); */
    margin-bottom: 0.5em;
  }
  h3 {
    align-self: flex-end;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 900;
    margin-bottom: 0.5em;
  }
  p {
    align-self: center;
    font-size: 1.5em;
    /* color: var(--accent-color-secondary); */
    margin-bottom: 0.5em;
    font-weight: 500;
    max-width: 45ch;
  }
  a {
    align-self: flex-end;
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius);
  }
`;

// fdsfs
// const ProjectImage = styled.div`
//   margin-left: 1em;
//   flex: 1;
//   background-image: url(${OSRSImage});
//   background-repeat: no-repeat, no-repeat;
//   background-position: center;
//   background-size: contain;
//   transition: 250ms ease-in-out;
//   &:hover {
//     transform: scale(1.05);
//   }
//   @media (max-width: 680px) {
//     flex: auto;
//     height: 20em;
//   }
// `;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  svg {
    margin-bottom: 0.5em;
  }
`;
