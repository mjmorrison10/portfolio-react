import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Logo>
        <Typography color="primary">MM</Typography>
      </Logo>
      <Name color="secondary">
        <Typography color="secondary">
          Copyright &copy; {new Date().getFullYear()} | Michael Morrison
        </Typography>
      </Name>
    </Container>
  );
}
// fdd

export default Footer;

const Container = styled.div`
  height: 15vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  /* color: var(--accent-color-primary); */
  p {
    font-weight: 900;
  }
`;

const Logo = styled.div`
  background-color: var(--bgcolor-secondary);
  padding: 1rem;
  border-radius: 25% 50%;
  font-weight: 900;
  font-size: 1.25em;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
`;

const Name = styled.div`
  background-color: var(--bgcolor-secondary);
  padding: 0.5rem 1rem;
  font-weight: 700;
  border-radius: var(--border-radius);
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
`;

// 665trefdsfdsfsffdsfdsdssddsfdsjkjfdfds
