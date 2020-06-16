import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles(theme => ({
  container: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const Container = () => {
  const classes = useStyles();
  return <div className={classes.container} />;
};
export default Container;
