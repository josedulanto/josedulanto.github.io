// @flow

import React, { Component } from "react";
import styled from "styled-components";

import FaHeart from "react-icons/lib/fa/heart";
import Scroll, { Element } from "react-scroll";
import Typography from "material-ui/Typography";

import MenuBottom from "./Components/MenuBottom";
import TitleBar from "./Components/TitleBar";

import AboutMe from "./Pages/AboutMe";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";

type Props = {};

type State = {
  selectedMenuItem: number
};

class App extends Component<Props, State> {
  state = {
    selectedMenuItem: 0
  };

  handleClick = (element: string): void => {
    Scroll.scroller.scrollTo(element, {
      duration: 1200,
      delay: 50,
      smooth: true,
      containerId: "scrollableContent",
      offset: 0
    });
  };

  handleWaypoint = (selectedMenuItem: number): void => {
    console.log(selectedMenuItem);
    this.setState({ selectedMenuItem });
  };

  render() {
    const currentYear = new Date().getFullYear();

    return (
      <StyledRoot>
        <TitleBar />
        <div className="bg-cover" />
        <div className="outer">
          <div className="inner">
            <main id="scrollableContent" className="content">
              <Element name="about-me" className="element">
                <AboutMe />
              </Element>
              <Element name="skills" className="element">
                <Skills />
              </Element>
              <Element name="work" className="element">
                <Work />
              </Element>
              <Element name="side-projects" className="element">
                <Projects />
              </Element>
              <Element name="education" className="element">
                <Education />
              </Element>
              <Typography paragraph={true} align="center">
                &copy; {currentYear} José Dulanto. Built with{" "}
                <FaHeart color="crimson" className="heart-icon" /> from México.
              </Typography>
            </main>
          </div>
        </div>
        <MenuBottom
          handleClick={this.handleClick}
          selectedMenuItem={this.state.selectedMenuItem}
        />
      </StyledRoot>
    );
  }
}

const StyledRoot = styled.div`
  .bg-cover {
    position: relative;
    display: block;
    width: 100%;
    height: 370px;
    background: url("/images/bg_desk.jpg") no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    padding: 24px;
  }

  .element {
    margin-bottom: 40px;
    z-index: 2px;
  }

  .heart-icon {
    margin: 4px;
  }

  .inner {
    flex: 1;
    display: flex;
  }

  .outer {
    position: absolute;
    top: 64px;
    right: 0;
    bottom: 56px;
    left: 0;
    display: flex;

    @media (min-width: 480px) {
      top: 64px;
    }

    @media (max-width: 480px) {
      top: 48px;
    }
  }
`;

export default App;
