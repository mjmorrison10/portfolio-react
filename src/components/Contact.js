import { Button, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Background from "../assets/images/bg-white-5.jfif";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import * as Config from "./ComponentsConfig";

 
function Contact() {
  return (
    <Container id="contact">
      <ContactWrapper>
        <TextWrapper>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            Want to work with me?
          </Typography>
          <Typography variant="p" component="h3" color="primary" gutterBottom>
            I'm available! Just email me a design, and I'll develop it!
          </Typography>
        </TextWrapper>
        <Button
          variant="contained"
          color="secondary"
          href="mjmorrison10@outlook.com"
          gutterBottom
          onClick={() =>
            window.open("mailto:mjmorrison10@outlook.com", "_blank")
          }
        >
          Email direct - click here!
        </Button>
        <ContactFormWrapper>
          <ContactForm />
        </ContactFormWrapper>
      </ContactWrapper>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
}


export default Contact;
const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(${Config.background}), url(${Background});
  background-repeat: no-repeat, no-repeat;
  background-position: right;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10rem;
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

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h1 {
    /* text-shadow: -2px 0 rgba(0, 0, 0, 0.5), 0 2px rgba(0, 0, 0, 0.5), 2px 0 rgba(0, 0, 0, 0.5), 0 -2px rgba(0, 0, 0, 0.5); */

    /* font-weight: 900; */
  }
  h3 {
    /* text-shadow: -2px 0 rgba(0, 0, 0, 0.5), 0 2px rgba(0, 0, 0, 0.5), 2px 0 rgba(0, 0, 0, 0.5), 0 -2px rgba(0, 0, 0, 0.5); */
    /* font-weight: 700; */
  }
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

const ContactFormWrapper = styled.div`
  padding-top: 1rem;
  margin-bottom: 1rem;
`;
