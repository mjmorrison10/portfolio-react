import React from "react";
import styled from "styled-components";
import Thdistributors from "./Projects/Thdistributors";
import Michaeljobs from "./Projects/Michaeljobs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RockPaperScissors from "./Projects/RockPaperScissors";
import CMC from "./Projects/CMC";
import OSRS from "./Projects/OSRS";
import TicTacToe from "./Projects/TicTacToe";
import FAQAccordionCard from "./Projects/FAQAccordionCard";
import Sunnyside from "./Projects/Sunnyside";

function CustomProjects() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    SlidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  return (
    <Container {...settings}>
      <Michaeljobs />
      <RockPaperScissors />
      <TicTacToe />
      <FAQAccordionCard />
      <CMC />
      <Thdistributors />
      <OSRS />
      <Sunnyside />
    </Container>
  );
}


export default CustomProjects;

const Container = styled(Slider)`
  overflow-x: hidden;
  width: 90%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  padding-top: 3rem;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;
