import { Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import ReactWordcloud from "react-wordcloud";
import styled from "styled-components";
import Background from "../assets/images/bg-white-3.jpg";

function Education() {
  return (
    <Container>
      <Typography variant="h1" color="primary">
        Education
      </Typography>
      <Typography color="secondary">
        Over the past year, I have educated myself and others, remotely, on the
        following:
      </Typography>

      <WordCloudWrap>
        <ReactWordcloud
          words={words}
          options={{
            fontSizes: [16, 100],
          }}
        />
      </WordCloudWrap>

      <BottomWrapper>
        <ExpandMoreWrapper>
          <ExpandMore />
        </ExpandMoreWrapper>
      </BottomWrapper>

    </Container>
  );
}

export default Education;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${Background});
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4rem;
  p {
    font-weight: 700;
    font-size: 1.5rem;
    width: 80%;
    text-align: center;
  }
`;

const WordCloudWrap = styled.div`
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
    value: 10,
  },
  {
    text: "Firebase",
    value: 25,
  },
  {
    text: "Firestore",
    value: 20,
  },
];

const options = {
  fontSizes: [16, 100],
};
