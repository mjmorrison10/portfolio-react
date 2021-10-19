import { Button, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Background from "../assets/images/bg-white-4.jpg";
import Footer from "./Footer";

function Contact() {
  return (
    <Container>
      <ContactWrapper>
        <TextWrapper>
          <Typography variant="h3" component="h1" color="primary">
            Want to work with me?
          </Typography>
          <Typography variant="p" component="h3" color="primary">
            I'm available for work!
          </Typography>
        </TextWrapper>
        <Button
          variant="contained"
          color="secondary"
          href="mjmorrison10@outlook.com"
          onClick={() => window.open('mailto:mjmorrison10@outlook.com', '_blank')}
        >
          Contact me
        </Button>
      </ContactWrapper>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${Background});
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 4rem;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
