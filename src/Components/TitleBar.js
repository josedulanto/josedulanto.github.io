// @flow

import * as React from "react";
import { withStyles } from "material-ui/styles";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

type Props = {
  classes: Object
};

class MenuBar extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.appBar}>
        <Toolbar className="toolbar">
          <Typography
            variant="title"
            color="inherit"
            className={classes.socialIcons}
          >
            José Dulanto
            <Typography
              component="small"
              color="inherit"
              className={classes.small}
            >
              Developer
            </Typography>
          </Typography>
          <Button
            variant="raised"
            color="secondary"
            href="https://linkedin.com/in/josedulanto"
            target="_blank"
          >
            HIRE ME
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = theme => ({
  socialIcons: {
    flex: 1
  },
  appBar: {
    position: "absolute",
    zIndex: theme.zIndex.drawer + 1
  },
  small: {
    display: "inline-block",
    fontWeight: 100,
    marginLeft: 10,
    borderLeft: "1px solid white",
    paddingLeft: 10
  }
});

export default withStyles(styles)(MenuBar);
