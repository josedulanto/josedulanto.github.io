// @flow

import React from "react";
import styled from "styled-components";

import Avatar from "material-ui/Avatar";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

import FaLinkedinSquare from "react-icons/lib/fa/linkedin-square";
import FaTwitterSquare from "react-icons/lib/fa/twitter-square";
import FaGithubSquare from "react-icons/lib/fa/github-square";

type Props = {};

function AboutMe(props: Props) {
  return (
    <StyledRoot>
      <StyledPaper className="vCard">
        <StyledAvatar alt="José Dulanto" src="/images/josedulanto.jpg" />
        <Typography
          variant="display1"
          color="inherit"
          gutterBottom={false}
          align="center"
        >
          José Dulanto
        </Typography>
        <Typography variant="subheading" gutterBottom={true} align="center">
          I build stuff for the web
        </Typography>
        <Typography className="social-icons" align="center">
          <a
            href="https://www.linkedin.com/in/josedulanto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinSquare className="linkedin-icon" />
          </a>
          <a
            href="https://github.com/josedulanto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="github-icon" />
          </a>
          <a
            href="https://twitter.com/josedulanto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare className="twitter-icon" />
          </a>
        </Typography>
        <Typography variant="subheading" paragraph={true}>
          A Ruby developer with overall 6+ years of experience in the industry.
          Experienced writing applications from scratch to deploy and a proven
          ability to work in a team environment. I am passionate about
          transforming how innovation gets funded through code.
        </Typography>
        <Typography variant="subheading" paragraph={true}>
          Originally from Mexico, I speak English and Spanish. Coding is my
          passion, my daily job and hobby. I also enjoy walking my dog Dasha,
          lift some weights at the gym, spend time with my family and hang out
          with friends.
        </Typography>
        <Typography variant="subheading" paragraph={true}>
          I am here to help you code the next big thing!
        </Typography>
      </StyledPaper>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  margin-top: 150px;
  z-index: 2;
`;

const StyledAvatar = styled(Avatar)`
  width: 200px !important;
  height: 200px !important;
  position: absolute !important;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 83%;
`;

const StyledPaper = styled(Paper)`
  position: relative;
  padding: 120px 24px 24px 24px;

  .social-icons {
    padding-top: 0;
    padding-bottom: 20px;
    font-size: 30px;

    .linkedin-icon {
      color: #0077b5;
    }

    .github-icon {
      color: #333;
    }

    .twitter-icon {
      color: #1da1f2;
    }
  }
`;

export default AboutMe;
