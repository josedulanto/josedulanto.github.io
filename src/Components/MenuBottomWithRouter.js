// @flow

import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import SentimentVerySatisfiedIcon from "material-ui-icons/SentimentVerySatisfied";
import InsertChartIcon from "material-ui-icons/InsertChart";
import WorkIcon from "material-ui-icons/Work";
import CodeIcon from "material-ui-icons/Code";
import SchoolIcon from "material-ui-icons/School";

const menuItems = [
  { label: "About", icon: <SentimentVerySatisfiedIcon />, link: "/" },
  { label: "Skills", icon: <InsertChartIcon />, link: "/skills" },
  { label: "Work", icon: <WorkIcon />, link: "/work" },
  { label: "Portfolio", icon: <CodeIcon />, link: "/portfolio" },
  { label: "Education", icon: <SchoolIcon />, link: "/education" }
];

type Props = {
  classes: Object,
  history: Object
};

type State = {
  value: number
};

const styles = theme => ({
  menuBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  }
});

class MenuBottom extends React.Component<Props, State> {
  state = {
    value: 0
  };

  handleChange = (event: Object, value: number): void => {
    this.setState({ value });
    this.props.history.push(menuItems[value].link);
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;

    return (
      <BottomNavigation
        className={classes.menuBottom}
        value={value}
        showLabels
        onChange={this.handleChange}
      >
        {menuItems.map((item, i) => {
          return (
            <BottomNavigationAction
              key={`${item.label}-${i}`}
              label={item.label}
              icon={item.icon}
            />
          );
        })}
      </BottomNavigation>
    );
  }
}

export default withRouter(withStyles(styles)(MenuBottom));
