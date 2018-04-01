// @flow

import React from "react";
import styled from "styled-components";

import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const skills = [
  "API",
  "AWS",
  "Bootstrap",
  "Docker",
  "Heroku",
  "Go",
  "Javascript",
  "Jenkins",
  "Jira",
  "jQuery",
  "Kubernetes",
  "MySQL",
  "Node",
  "PostgreSQL",
  "Python",
  "React",
  "Redis",
  "Ruby",
  "Semantic UI",
  "Trello"
];

type Props = {};

export default function Skills(props: Props) {
  return (
    <div>
      <StyledPaper>
        <Typography variant="title" gutterBottom={true}>
          Skills
        </Typography>
        <Typography variant="subheading" gutterBottom={true}>
          Here is a concise list of the most valuable professional skills I
          possess (This is a mixed list of primary, secondary and exposed-to
          skills):
        </Typography>
        <StyledDivider />
        <SkillChips labels={skills} />
      </StyledPaper>
    </div>
  );
}

export function SkillChips(props: {
  labels: Array<string>,
  showlabel?: boolean
}) {
  const { labels, showlabel } = props;

  const resourceLogo = resource => {
    return (
      <Avatar
        src={`/images/logo64x64_${resource.toLowerCase().replace(" ", "")}.jpg`}
      />
    );
  };

  return labels.map((skill, i) => {
    return (
      <StyledChip
        key={`${skill}-${i}`}
        avatar={resourceLogo(skill)}
        label={showlabel === false ? false : skill}
      />
    );
  });
}

const StyledPaper = styled(Paper)`
  padding: 24px;
`;

let StyledChip = styled(Chip)`
  margin: 4px;

  & span {
    display: ${props => (props.label === false ? "none" : "flex")};
  }
`;

const StyledDivider = styled(Divider)`
  margin: 15px 0 !important;
`;

Chip.defaultProps = {
  label: true
};
