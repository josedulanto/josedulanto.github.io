// @flow

import React from "react";
import { withStyles } from "material-ui/styles";

// import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

type Props = {
  classes: Object
};

function HireMe(props: Props) {
  const { classes } = props;

  return (
    <div>
      <Typography className={classes.iDontExist}>
        I'm available for hiring
      </Typography>
    </div>
  );
}

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit * 3
  })
});

export default withStyles(styles)(HireMe);
