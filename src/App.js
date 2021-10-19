import "./App.css";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { createTheme, ThemeProvider } from "@material-ui/core";

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
    },
  },
});



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <Experience />
        <Projects />
      </ThemeProvider>
    </div>
  );
}

export default App;

