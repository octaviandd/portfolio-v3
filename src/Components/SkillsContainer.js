/** @format */

import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import svg1 from "../interface1.svg";
import svg from "../interface.svg";
import svg2 from "../user.svg";
import svg3 from "../computer.svg";

export default function SkillsContainer() {
  return (
    <Skills>
      <div id="skills">
        <h2>Skills</h2>
        <h4>Programming languages</h4>
        <p>JavaScript(ES6+), HTML5, CSS3, Python</p>
        <h4>Libraries / Frameworks</h4>
        <p>
          React, Node.js, Express.js, Next.js, d3.js, styled-components,
          <br></br>aos.js, animate.css, JWT, Bootstrap, Redux, React Spring,
          Material UI
        </p>
        <h4>Tools & Platforms</h4>
        <p>Git, Webpack, Netlify, Heroku, Contentful, Firebase, terminal,</p>
        <h4>Design</h4>
        <p>Photoshop, Sketch</p>
      </div>
      <div id="grid">
        <p>Responsive Design</p>
        <ReactSVG src={`${svg}`}></ReactSVG>
        <p>Debugging</p>
        <ReactSVG src={`${svg1}`}></ReactSVG>
        <p>Back-end integration</p>
        <ReactSVG src={`${svg2}`}></ReactSVG>
        <p>API integration</p>
        <ReactSVG src={`${svg3}`}></ReactSVG>
      </div>
    </Skills>
  );
}

const Skills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #eff0f1;
    font-size: 50px;
  }

  h4 {
    color: #9900fa;
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 30px;
  }
  p {
    color: #eff0f1;
    font-size: 20px;
  }

  svg {
    fill: #9900fa;
  }

  #grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin-left: 200px;
    grid-gap: 40px;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    justify-content: center;

    margin-left: 30px;
    margin-right: 30px;

    div {
      margin-bottom: 50px;
    }

    h2 {
      font-size: 38px;
    }

    h4 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }

    #grid {
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 10px;
      align-items: center;
      margin-left: 30px;
      margin-right: 0px;
      p {
        font-size: 5px;
        display: none;
      }
    }
  }
`;
