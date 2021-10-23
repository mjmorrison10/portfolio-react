import "./App.css";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { grey, orange, purple } from "@material-ui/core/colors";
import styled from "styled-components";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <ThemeProvider theme={halloween}>
      <Container>
        <Header />
        <Home />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        {/* <ContactForm /> */}
      </Container>
    </ThemeProvider>
  );
}

// ds


export default App;

const Container = styled.div`
  h1,
  h2,
  h3,
  p,
  svg {
    text-shadow: -0.75px 0 rgba(255, 255, 255, 0.5),
    0 0.75px rgba(255, 255, 255, 0.5), 0.75px 0 rgba(255, 255, 255, 0.5),
    0 -0.75px rgba(255, 255, 255, 0.5);
  }
  h1 {
    font-weight: 900;
  }
  h2 {
    font-weight: 800;
  }
  h3 {
    font-weight: 700;
  }
  p {
    text-shadow: -1px 0 rgba(255, 255, 255, 0.5),
    0 1px rgba(255, 255, 255, 0.5), 1px 0 rgba(255, 255, 255, 0.5),
    0 -1px rgba(255, 255, 255, 0.5);
    font-weight: 600;
  }
`;


const christmas = createTheme({
  palette: {
    primary: {
      main: "#B3000C",
      dark: "#008020",
      light: "#00e639",
    },
    secondary: {
      main: "#00B32C",
      dark: "#800008",
      light: "#e6000f",
      contrastText: "#fff",
    },
  },
});

// dds dsfsdfdsdygsfsdsaffdsdsfsfdsafddadadsafdsfsfsdsfdsfdsafdsfdsfdsafddsdfdsfdsfdsfddfdsafd45jfdsdfhjjjghmmnjjmmmmmmmmmnmmnmmmhhhgsfgd45mbbbnbnvbdgjjjjhh1jkjjhjjj20hggsbbjjhnhmhnmmnnnnmnhhnnhjhmdsfadsffdsafd45sds45564564564afdsafdssfdsfdafdsafdfdsfadsfds

const halloween = createTheme({
  palette: {
    primary: {
      main: orange[700],
      dark: purple[500],
      light: purple[300],
    },
    secondary: {
      main: purple[700],
      dark: orange[500],
      light: orange[300],
      contrastText: "#fff",
    },
    success: {
      main: grey[700],
    },
  },
});
