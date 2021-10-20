import "./App.css";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Button, createTheme, ThemeProvider } from "@material-ui/core";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { Link } from "react-scroll";
import styled from "styled-components";

// fdsdsdsfdssfdfgbsdhggdgfdsadsfdsfdsfds


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Nav>
          <Link to="home" smooth={true}>
            <Button variant="contained" color="primary">
              home
            </Button>
          </Link>

          <Link to="experience" smooth={true}>
            <Button variant="contained" color="primary">
              experience
            </Button>
          </Link>

          <Link to="projects" smooth={true}>
            <Button variant="contained" color="primary">
              projects
            </Button>
          </Link>

          <Link to="education" smooth={true}>
            <Button variant="contained" color="primary">
              education
            </Button>
          </Link>

          <Link to="contact" smooth={true}>
            <Button variant="contained" color="primary">
              contact me
            </Button>
          </Link>

          <Button
            variant="contained"
            color="primary"
            onClick={() => window.open("https://bit.ly/MJMPortfolio", "_blank")}
          >
            Old Site
          </Button>
        </Nav>
      </Container>

      {/* <Header /> */}
      <Home  />
      <Experience  />
      <Projects  />
      <Education  />
      <Contact  />
    </ThemeProvider>
  );
}

// fdsfdsdsddddfddssddsdsdssddssddsdssdsfddddfdsssdsd

export default App;

const theme = createTheme({
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

const Container = styled.div`
  position: fixed;
  top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Nav = styled.div`
  background-color: var(--bgcolor-primary);
  height: auto;
  width: 90%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    text-transform: capitalize;
    margin: 0.25rem 0;
  }
`;
