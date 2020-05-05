/** @format */

import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

import contactSVG from "../../business.svg";

export default function ContactSlide() {
  return (
    <Hero>
      <div id="contact">
        <ReactSVG src={`${contactSVG}`}></ReactSVG>
        <h1>Get in Touch</h1>
        <h3>
          I'm currently looking for new opportunities therefore my inbox is
          always open. Wheter you have a question or would like to discuss, I
          will do be best to get back to you.
        </h3>
        <button>
          <a href="mailto: octaviandd@yahoo.com">Say Hello</a>
        </button>
      </div>
    </Hero>
  );
}

const Hero = styled.div`
  min-height: 100vh;
  display: flex;

  div {
    margin-top: 30px;
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: center;
  }

  svg {
    fill: #9900fa;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 40px;
    color: rgb(239, 240, 241);
    margin-bottom: 20px;
    letter-spacing: 2px;
    word-spacing: 3px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  h3 {
    width: 650px;
    text-align: center;
    color: rgba(239, 240, 241, 0.7);

    @media (max-width: 768px) {
      font-size: 18px;
      width: 200px;
    }
  }

  button {
    padding: 15px 30px;
    font-size: 25px;
    background-color: transparent;
    border: 2px solid #9900fa;
    color: #9900fa;
    margin-top: 100px;
    font-weight: 600;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #9900fa;
    }
  }
`;
