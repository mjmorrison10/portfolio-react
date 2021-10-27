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
      </Container>
    </ThemeProvider>
  );
}



export default App;

const Container = styled.div`
  overflow: hidden;
  h1,
  h2,
  h3,
  p,
  svg {
    text-shadow: -1px 0 rgba(0, 0, 0, 0.9), 0 1px rgba(0, 0, 0, 0.9),
      1px 0 rgba(0, 0, 0, 0.9), 0 -1px rgba(0, 0, 0, 0.9);
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
      dark: purple[300],
      light: purple[300],
    },
    secondary: {
      main: purple[300],
      dark: orange[500],
      light: orange[300],
      contrastText: "#fff",
    },
    success: {
      main: grey[700],
    },
  },
});
