import React from "react";
import CustomBtn from "../Button";
import logo from "../../../src/logo.svg";
import logoMobile from "../../../src/logoMobile.svg";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "#fff",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  logo: {
    width: "100%",
    display: "none",
    ["@media (max-width:780px)"]: {
      flexDirection: "inline-block",
    },
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    "&:hover": {
      color: "#4f25c8",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
});

function NavBar() {
  const classes = style();
  return (
    <Toolbar position="sticky" color="rgba(0,0,0,0.87)" className={classes.bar}>
      <img src={logo} className={classes.logo} />

      <Typography variant="h6" className={classes.menuItem}>
        {" "}
        NavBar{" "}
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        {" "}
        NavBar{" "}
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        {" "}
        NavBar{" "}
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        {" "}
        NavBar{" "}
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        {" "}
        NavBar{" "}
      </Typography>
      <CustomBtn txt="Purple Button" />
    </Toolbar>
  );
}

export default NavBar;
