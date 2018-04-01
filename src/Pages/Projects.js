// @flow

import React from "react";
import styled from "styled-components";

import Divider from "material-ui/Divider";
import GridList, { GridListTile, GridListTileBar } from "material-ui/GridList";
import Paper from "material-ui/Paper";
import { SkillChips } from "./Skills";
import Typography from "material-ui/Typography";

const projects = [
  {
    name: "DEPCO",
    img: "/images/logo_ruby.jpg",
    skills: ["ruby", "javascript", "postgresql"],
    description:
      "An inventory of collision auto parts. The application connects to MicroSIP PoS to work based on its firebird database."
  },
  {
    name: "ContentCast",
    img: "/images/logo_ruby.jpg",
    skills: ["ruby", "javascript", "mysql"],
    description:
      "Visualize reports, html, text, audio and video through an easy to configure GUI, then stream it to monitors in your office or business."
  },
  {
    name: "MedicApp",
    img: "/images/logo_ruby.jpg",
    skills: ["ruby", "javascript", "postgresql"],
    description:
      "Your medical office on the go. Manage appointments, prescriptions, patients, charts, vaccine control, etc."
  },
  {
    name: "Autos",
    img: "/images/logo_ruby.jpg",
    skills: ["ruby", "javascript", "postgresql"],
    description:
      "Manage your car dealer business with client records, IOUs, reports, user profiles and receive notifications for due payments."
  },
  {
    name: "TwitMapr",
    img: "/images/logo_ruby.jpg",
    skills: ["ruby", "javascript", "mysql"],
    description:
      "Find tweets around the world by panning and zooming in google maps, filter them by user, keyword or hashtag."
  }
];

type Props = {};

function Projects(props: Props) {
  return (
    <div>
      <StyledPaper elevation={1}>
        <Typography variant="title" gutterBottom={true}>
          Side Projects
        </Typography>
        <Typography variant="subheading" gutterBottom={true}>
          Some projects I have started on my spare time or have been a part of
          during the course of my career.
        </Typography>
        <StyledDivider />
        <GridList cellHeight={180}>
          {projects.map((project, i) => (
            <GridListTile key={project.name}>
              <img src={project.img} alt={project.name} />
              <StyledGridListTileBar
                title={
                  <div className="title-wrapper">
                    <div className="project-name">
                      <span>{project.name}</span>
                    </div>
                    <div className="project-skills">
                      <SkillChips labels={project.skills} showlabel={false} />
                    </div>
                  </div>
                }
                className="project"
                subtitle={
                  <div className="project-overlay">
                    <span>{project.description}</span>
                  </div>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </StyledPaper>
    </div>
  );
}

const StyledPaper = styled(Paper)`
  padding: 24px;
`;

const StyledDivider = styled(Divider)`
  margin: 15px 0 !important;
`;

const StyledGridListTileBar = styled(GridListTileBar)`
  background: transparent !important;
  float: left;
  height: 100% !important;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100% !important;

  span {
    padding: 15px;
  }

  .title-wrapper {
    margin-left: -5px;

    .project-name {
      display: block;

      span {
        background: rgba(0, 0, 0, 0.5);
        font-size: 2rem;
        font-weight: 600;
        padding: 4px 10px 4px 10px;
        line-height: 40px;

        @media (max-width: 480px) {
          font-size: 1rem;
          padding: 4px 10px 4px 10px;
        }
      }
    }

    .project-skills {
      margin-top: 15px;
    }
  }

  .project-overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    top: 100%;
    font-size: 0.8rem;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    overflow: hidden;
    text-align: center;
    width: 100%;
    white-space: normal;
    line-height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s;

    @media (min-width: 480px) {
      font-size: 1.1rem;
      line-height: 2rem;
    }

    :hover .project-overlay {
      top: 0;
      cursor: pointer;
    }
  }
`;

export default Projects;
