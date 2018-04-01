// @flow

import * as React from "react";

import { withStyles } from "material-ui/styles";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import red from "material-ui/colors/red";
import Button from "material-ui/Button";

type Props = {
  avatar: string,
  classes: Object,
  children: React.Node,
  description: string,
  employerLogo: string,
  employerName: string,
  linkedin: string,
  position: string,
  timeline: string,
  website: string
};

class WorkCard extends React.Component<Props> {
  handleClick = url => {
    window.open(url, "_blank");
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                src={this.props.avatar}
                aria-label="Work"
                className={classes.avatar}
              />
            }
            subheader={this.props.timeline}
            title={this.props.position}
          />
          <CardMedia
            className={classes.media}
            image={this.props.employerLogo}
            title={this.props.employerName}
          />
          <CardContent>
            <Typography paragraph>{this.props.description}</Typography>
            <Typography paragraph type="body2">
              <strong>Responsibilities</strong>
            </Typography>
            <Typography component="div">
              {React.Children.only(this.props.children)}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              color="primary"
              onClick={this.handleClick.bind(this, this.props.website)}
            >
              Website
            </Button>
            <Button
              color="default"
              onClick={this.handleClick.bind(this, this.props.linkedin)}
            >
              LinkedIn
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16
  }),
  card: {
    maxWidth: 400
  },
  media: {
    height: 194
  },
  actions: {
    display: "flex",
    float: "right",
    paddingLeft: 30,
    backgroundColor: "red"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

export default withStyles(styles)(WorkCard);
