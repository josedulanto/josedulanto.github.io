// @flow

import * as React from "react";
import { withStyles } from "material-ui/styles";

import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import FaExternalLink from "react-icons/lib/fa/external-link";

type Props = {
  children?: React.Element<any>,
  classes: Object,
  employerLogo: string,
  employerName: string,
  linkedin: string,
  position: string,
  timeline: string,
  website: string
};

class WorkExpansionPanel extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Avatar
              alt={this.props.employerName}
              src={this.props.employerLogo}
              className={classes.avatar}
            />
            <div className={classes.summary}>
              <Typography variant="title" className={classes.title}>
                {this.props.position} @ {this.props.employerName}
              </Typography>
              <Typography variant="subheading" className={classes.subheading}>
                {this.props.timeline}
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div>{this.props.children}</div>
            <Divider />
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                size="small"
                href={this.props.website}
                target="_blank"
              >
                <FaExternalLink className={classes.leftIcon} />
                Website
              </Button>
              {this.props.linkedin ? (
                <Button size="small" href={this.props.linkedin} target="_blank">
                  <FaExternalLink className={classes.leftIcon} />
                  LinkedIn
                </Button>
              ) : null}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  buttons: {
    textAlign: "right"
  },
  button: {
    margin: theme.spacing.unit
  },
  details: {
    flexDirection: "column"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  summary: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column"
  },
  subheading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular,
    verticalAlign: "middle"
  },
  title: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
    verticalAlign: "middle"
  }
});

export default withStyles(styles)(WorkExpansionPanel);
