import { Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import ReactWordcloud from "react-wordcloud";
import styled from "styled-components";
import Background from "../assets/images/bg-white-4.jpg";
import { Link } from "react-scroll";
import * as Config from "./ComponentsConfig";

function Education() {
  return (
    <Container id="education">
      <Typography variant="h2" component="h1" color="primary">
        Education
      </Typography>
      <Typography color="secondary">
        {/* Years ago, I learned a few programming/scripting languages, primarily */}
        {/* MSL where I learned RegEx and others. */}
      </Typography>
      <Typography color="secondary">
        I am well versed in the following languages, frameworks, and libraries
        (not including everything in the list)
        {/* Over the past year, I have educated myself and others, remotely, on the */}
        {/* following: */}
      </Typography>

      <WordCloudWrap>
        <ReactWordcloud
          words={words}
          options={{
            fontSizes: [20, 60],
          }}
        />
      </WordCloudWrap>

      <BottomWrapper>
        <ExpandMoreWrapper>
          <Link to="contact" smooth={true}>
            <ExpandMore color="primary" />
          </Link>
        </ExpandMoreWrapper>
      </BottomWrapper>
    </Container>
  );
}

export default Education;

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(${Config.background}), url(${Background});

  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4rem;
  h1 {
    font-weight: bold;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
  }
  p {
    font-weight: 700;
    font-size: 1.5rem;
    max-width: 60ch;
    text-align: center;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
  }
  @media (max-width: 816px) {
    padding-top: 6rem;
  }
  @media (max-width: 432px) {
    padding-top: 9rem;
  }
  @media (max-width: 291px) {
    padding-top: 12rem;
  }
  @media (max-width: 282px) {
    padding-top: 15rem;
  }
`;

const WordCloudWrap = styled.div`
  height: 50vh;
  width: 100%;
  @media (max-width: 1000px) {
    height: auto;
  }
`;

const BottomWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const ExpandMoreWrapper = styled.div`
  cursor: pointer;
  transition: 250ms ease-in-out;
  color: var(--accent-color-dark);
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  &:hover {
    transform: scale(2);
  }
`;

const words = [
  {
    text: "Programming",
    value: 50,
  },
  {
    text: "Web Development",
    value: 55,
  },
  {
    text: "HTML",
    value: 40,
  },
  {
    text: "CSS",
    value: 40,
  },
  {
    text: "Tailwind CSS",
    value: 45,
  },
  {
    text: "JavaScript",
    value: 25,
  },
  {
    text: "React JS",
    value: 20,
  },
  {
    text: "GitHub",
    value: 35,
  },
  {
    text: "Git",
    value: 30,
  },
  {
    text: "MSL",
    value: 40,
  },
  {
    text: "Firebase",
    value: 25,
  },
  {
    text: "Firestore",
    value: 20,
  },
  {
    text: "RegEx",
    value: 38,
  },
];

const options = {
  fontSizes: [25, 100],
  rotationAngles: [0, 25],
  rotations: 5,
  padding: 10,
  deterministic: true,
  scale: "sqrt",
  spiral: "archimedesan",
  enabletooltip: false,
};
