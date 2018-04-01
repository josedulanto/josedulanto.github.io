// @flow

import React from "react";
import { withStyles } from "material-ui/styles";
import TitleBar from "./Components/TitleBar";
import MenuBottom from "./Components/MenuBottom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import HireMe from "./Pages/HireMe";

import "./App.css";

const padding = 24;

const styles = theme => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // width: "100%",
    height: "100%",
    // zIndex: 1,
    overflow: "hidden"
  },
  appFrame: {
    // position: "relative",
    // display: "flex",
    // width: "100%",
    // height: "100%"
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    width: `calc(100% - ${padding * 2}px)`,
    marginTop: 64,
    marginBottom: 56,
    [theme.breakpoints.up("sm")]: {
      marginTop: 64
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 48
    }
  }
});

type State = {};

type Props = {
  classes: Object
};

class App extends React.Component<Props, State> {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <TitleBar />
            <main className={classes.content}>
              <Route exact path="/" component={AboutMe} />
              <Route path="/skills" component={Skills} />
              <Route path="/work" component={Work} />
              <Route path="/projects" component={Projects} />
              <Route path="/education" component={Education} />
              <Route path="/hire-me" component={HireMe} />
            </main>
            <MenuBottom />
          </div>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
