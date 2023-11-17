import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { MailOutline, Instagram } from "@mui/icons-material";
import Banner from "../Banner";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  logo: {
    marginRight: theme.spacing(1),
  },
  email: {
    marginLeft: theme.spacing(1),
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
        <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
            <div className={classes.logoContainer}>
            <MailOutline className={classes.logo} />
            <span className={classes.email}>caribeburgertour@gmail.com</span>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <div className={classes.logoContainer}>
            <Instagram className={classes.logo} />
            <span className={classes.email}>@caribeburgertour</span>
            </div>
        </Grid>
        </Grid>
        <Banner webImage='/assets/banner_patrocinadores.jpg' mobileImage='/assets/banner_patrocinadores_mobil.jpg' maxHeight='400px'/>
    </div>
  );
};

export default Footer;