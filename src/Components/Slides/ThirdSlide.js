/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import ProjectContainer from "../ProjectContainer";

import harmony from "../../harmony.png";
import inviteMe from "../../invite-me.png";
import mountainResort from "../../mountain-resort.png";
import movieSearch from "../../movie-search.png";

export default function ThirdSlide() {
  const [isShowing, show] = useState(false);

  const items1 = ["React.js", "styled-components", "Spotify API"];
  const items2 = ["React.js", "Express.js", "JWT", "animate.css"];
  const items3 = ["React.js", "styled-components", "React Spring"];
  const items4 = ["React", "animate.css", "MovieDB API"];

  return (
    <Hero id="project">
      <ProjectsContainer>
        <ProjectContainer
          picture={harmony}
          text="Harmony"
          show={show}
          description="Harmony is a React single page web application that gathers data from
          the Spotify API and gives the user details about his profile, music
          recommandations, stats about his favorite artists."
          items={items1}
          link="https://github.com/octaviandd/harmony"
        ></ProjectContainer>
        <ProjectContainer
          picture={inviteMe}
          text="invite-Me"
          show={show}
          description="This is a full-stack application that links a front-end build with React and designed with
Material UI with a back-end build with Express.js that stores the data in a Mongo database,
including authentication."
          link="https://github.com/octaviandd/invite-Me"
          items={items2}
        ></ProjectContainer>
      </ProjectsContainer>
      <div id="projects">
        <h2>Projects</h2>
      </div>
      <ProjectsContainer>
        <ProjectContainer
          picture={mountainResort}
          text="Mountain-Resort"
          show={show}
          description="Mountain Resort is a a six pages web application build in React with Context API and React
Router that includes surfing through pages, getting specific information about rooms using filters."
          items={items3}
          link="https://github.com/octaviandd/mountain-resort-react"
        ></ProjectContainer>
        <ProjectContainer
          picture={movieSearch}
          text="Movie-Search"
          show={show}
          description="Movie Search makes use of the MovieDB API and allows users to search for their favorite movies and displays it's recommandations based on specifc genres."
          items={items4}
          link="https://github.com/octaviandd/movie-search-react"
        ></ProjectContainer>
      </ProjectsContainer>
      ;
    </Hero>
  );
}

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 200px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    div:nth-child(1) {
      order: 1;
    }
  }

  #projects {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h2 {
      display: inline-block;
      margin: 0 auto;
      border: 1px solid #9900fa;
      padding: 10px 20px;
      color: #eff0f1;
      text-align: center;
      border-radius: 5px;
      letter-spacing: 2px;
    }

    @media (max-width: 768px) {
      margin-top: 50px;
    }
  }
`;
