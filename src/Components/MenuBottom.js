// @flow

import React from "react";
import { withStyles } from "material-ui/styles";

import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import FaCoffee from "react-icons/lib/fa/coffee";
import InsertChartIcon from "material-ui-icons/InsertChart";
import WorkIcon from "material-ui-icons/Work";
import CodeIcon from "material-ui-icons/Code";
import SchoolIcon from "material-ui-icons/School";

const menuItems = [
  {
    element: "about-me",
    label: "About",
    icon: <FaCoffee size={24} />
  },
  {
    element: "skills",
    label: "Skills",
    icon: <InsertChartIcon />
  },
  { element: "work", label: "Work", icon: <WorkIcon /> },
  {
    element: "side-projects",
    label: "Projects",
    icon: <CodeIcon />
  },
  {
    element: "education",
    label: "Education",
    icon: <SchoolIcon />
  }
];

type Props = {
  classes: Object,
  handleClick: string => void,
  selectedMenuItem: number
};

type State = {
  selectedMenuItem: number
};

class MenuBottom extends React.Component<Props, State> {
  state = {
    selectedMenuItem: 0
  };

  handleChange = (event: Object, selectedMenuItem: number): void => {
    event.preventDefault();
    this.setState({ selectedMenuItem });
    this.props.handleClick(menuItems[selectedMenuItem].element);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedMenuItem === this.state.selectedMenuItem) return;
    this.setState({ selectedMenuItem: nextProps.selectedMenuItem });
  }

  render() {
    const { selectedMenuItem } = this.state;
    const { classes } = this.props;

    return (
      <BottomNavigation
        className={classes.menuBottom}
        value={selectedMenuItem}
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

const styles = theme => ({
  menuBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  }
});

export default withStyles(styles)(MenuBottom);
