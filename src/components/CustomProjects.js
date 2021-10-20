import React from "react";
import styled from "styled-components";
import Thdistributors from "./Projects/Thdistributors";
import Michaeljobs from "./Projects/Michaeljobs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CustomProjects() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    SlidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container {...settings}>
      <Thdistributors />
      <Michaeljobs />
    </Container>
  );
}

export default CustomProjects;

const Container = styled(Slider)`
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
