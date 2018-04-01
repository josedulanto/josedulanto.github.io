// @flow

import React from "react";
import styled from "styled-components";

import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemText } from "material-ui/List";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const resources = [
  "CodeCademy",
  "CodeFights",
  "CodeSchool",
  "CodeWars",
  "Egghead",
  "Exercism",
  "FreeCodeCamp",
  "Lynda",
  "PluralSight",
  "Udemy"
];

type Props = {};

const resourceLogo = resource => {
  return (
    <Avatar
      src={`/images/logo64x64_${resource.toLowerCase().replace(" ", "")}.jpg`}
    />
  );
};

export default function Education(props: Props) {
  return (
    <StyledPaper>
      <Typography variant="title" gutterBottom={true}>
        Education
      </Typography>
      <Typography variant="subheading" gutterBottom={true}>
        The brain is a muscle too, nothing better than a dose of code challenge
        crunches to get it in shape. Remember these wise words ...
        <i>
          "If you think education is expensive, try estimating the cost of
          ignorance."
        </i>{" "}
        ... mind = blown.
      </Typography>
      <StyledDivider />
      <Typography variant="body2" gutterBottom={true}>
        The former
      </Typography>
      <List dense>
        <ListItem>
          <StyledAvatar
            alt="Universidad Anáhuac"
            src="/images/logo_anahuac.jpg"
          />
          <ListItemText
            primary="Universidad Anáhuac (2013 - 2015)"
            secondary="MBA (Alta Dirección y Negocios Internacionales)"
          />
        </ListItem>
        <ListItem>
          <StyledAvatar
            alt="Universidad Anáhuac"
            src="/images/logo_anahuac.jpg"
          />
          <ListItemText
            primary="Universidad Anáhuac (2003 - 2009)"
            secondary="Systems Engineer"
          />
        </ListItem>
      </List>
      <Typography variant="body2" gutterBottom={true}>
        The latter
      </Typography>
      <div className="chips">
        {resources.map((resource, i) => {
          return (
            <StyledChip
              key={i}
              avatar={resourceLogo(resource)}
              label={resource}
              className="chip"
            />
          );
        })}
      </div>
    </StyledPaper>
  );
}

const StyledPaper = styled(Paper)`
  padding: 24px;

  .chip {
    margin: 4px;
  }

  .chips {
    margin: 12px;
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 64;
  height: 64;
`;

const StyledDivider = styled(Divider)`
  margin: 15px 0 !important;
`;

const StyledChip = styled(Chip)`
  margin: 4px;

  & span {
    display: ${props => (props.label === true ? "none" : "flex")};
  }
`;
