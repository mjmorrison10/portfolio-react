import "./App.css";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { grey, orange, purple } from "@material-ui/core/colors";

function App() {
  return (
    <ThemeProvider theme={halloween}>
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </ThemeProvider>
  );
}



export default App;

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
