// @flow

import * as React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";

import Divider from "material-ui/Divider";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import IconButton from "material-ui/IconButton";

import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";

import SentimentVerySatisfiedIcon from "material-ui-icons/SentimentVerySatisfied";
import InsertChartIcon from "material-ui-icons/InsertChart";
import WorkIcon from "material-ui-icons/Work";
import CodeIcon from "material-ui-icons/Code";
import SchoolIcon from "material-ui-icons/School";
import CommunicationEmailIcon from "material-ui-icons/Email";

type Props = {
  handleMenuToggle: boolean => void,
  open: boolean,
  history: Object,
  classes: Object,
  theme: Object
};

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 60,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

class MenuDrawer extends React.Component<Props> {
  handleDrawerToggle = (): void => {
    this.props.handleMenuToggle(!this.props.open);
  };

  handleClick = (path: string): void => {
    this.props.history.push(path);
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Drawer
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !this.props.open && classes.drawerPaperClose
          )
        }}
        open={this.props.open}
        type="permanent"
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerToggle}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <ListItem
            button
            className={classes.selected}
            onClick={this.handleClick.bind(this, "/")}
          >
            <ListItemIcon>
              <SentimentVerySatisfiedIcon />
            </ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button onClick={this.handleClick.bind(this, "/skills")}>
            <ListItemIcon>
              <InsertChartIcon />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button onClick={this.handleClick.bind(this, "/work")}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Work" />
          </ListItem>
          <ListItem button onClick={this.handleClick.bind(this, "/portfolio")}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button onClick={this.handleClick.bind(this, "/education")}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Education" />
          </ListItem>
          <ListItem button onClick={this.handleClick.bind(this, "/contact")}>
            <ListItemIcon>
              <CommunicationEmailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </div>
      </Drawer>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(MenuDrawer));
