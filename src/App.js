import logo from "../src/logo.svg";
import "./App.css";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import NavBar from "./components/Navbar";
import Grid from "./components/Grid";
import SecurityIcon from "@material-ui/icons/Security";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ComputerIcon from "@material-ui/icons/Computer";
import HttpIcon from "@material-ui/icons/Http";
import { Typography } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSizes: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            A Space for a Title
          </Typography>
          <Typography
            variant="h5"
            className={classes.littleSpace}
            color="primary"
          >
            A space for some text.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid
            icon={
              <SecurityIcon
                style={{ fill: "#4360A6", height: "125", width: "125" }}
              />
            }
            title="Badge"
            btnTitle="Show Me More"
          />
          <Grid
            icon={
              <EventNoteIcon
                style={{ fill: "#449A76", height: "125", width: "125" }}
              />
            }
            title="Calendar"
            btnTitle="Show Me More"
          />
          <Grid
            icon={
              <TrendingUpIcon
                style={{ fill: "#D05B2D", height: "125", width: "125" }}
              />
            }
            title="Upward"
            btnTitle="Show Me More"
          />
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid
            icon={
              <ImportExportIcon
                style={{ fill: "#45EA780", height: "125", width: "125" }}
              />
            }
            title="ImportExport"
            btnTitle="Show Me More"
          />
          <Grid
            icon={
              <ComputerIcon
                style={{ fill: "#E69426", height: "125", width: "125" }}
              />
            }
            title="Computer"
            btnTitle="Show Me More"
          />
          <Grid
            icon={
              <HttpIcon
                style={{ fill: "#2EA09D", height: "125", width: "125" }}
              />
            }
            title="HTTP"
            btnTitle="Show Me More"
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
