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
import Blogr from "./Projects/Blogr";
import Loopstudios from "./Projects/Loopstudios";
import TipCalculator from "./Projects/TipCalculator";
import Crowdfunding from "./Projects/Crowdfunding";
import TestimonialsGrid from "./Projects/TestimonialsGrid";
import TimeTracking from "./Projects/TimeTracking";
import FyloDataStorage from "./Projects/FyloDataStorage";
import CodingBootcampSlider from "./Projects/CodingBootcampSlider";
import SocialMediaDashboardThemeSwitcher from "./Projects/SocialMediaDashboardThemeSwitcher";
import InsureLandingPage from "./Projects/InsureLandingPage";
import PricingComponent from "./Projects/PricingComponent";
import Fem28 from "./Projects/Fem28";
import Fem29 from "./Projects/Fem29";
import Fem30 from "./Projects/Fem30";
import Fem31 from "./Projects/Fem31";
import Fem32 from "./Projects/Fem32";
import Whichbank from "./Projects/Whichbank";
import WhichbankLanding from "./Projects/WhichbankLanding";

function CustomProjects() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    SlidesToScroll: 1,
    autoplay: true,
    centermode: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <Container {...settings}>
      <Whichbank />
      <WhichbankLanding />
      <FAQAccordionCard />
      <TimeTracking />
      <TipCalculator /> 
      <Sunnyside />
      <Blogr />
      <Crowdfunding />
      <Loopstudios />
      <TestimonialsGrid />
      <FyloDataStorage />
      <CodingBootcampSlider />
      <SocialMediaDashboardThemeSwitcher />
      <InsureLandingPage />
      <PricingComponent />
      <Fem28 />  {/* Cliboard Landing page */}
      <Fem29 />  {/* Huddling Landing Page with Alternative Feature Blocks */}
      <Fem30 />  {/* Fylo Dark  Theme Landing Page */}
      <Fem31 />  {/* Fylo Landing Page With Two Column Layout */}
      <Fem32 />  {/* Huddle Landing Page with Curved Sections */} 

      <Michaeljobs />
      <RockPaperScissors />
      <TicTacToe />
      <Thdistributors />
      <OSRS />

      {/* <CMC /> */}

    </Container>
  );
}

export default CustomProjects;

const Container = styled(Slider)`
  background-color: rgba(0, 0, 0, 0.7);
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
