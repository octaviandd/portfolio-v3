/** @format */

import React from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";

export default function ContactContainer() {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, 60rem, 0)" },
    transform: "translate3d(0,0,0)",
    config: config.slow,
  });

  return (
    <Hero style={barAnimation}>
      <div>
        <a href="https://github.com/octaviandd">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto: octaviandd@yahoo.com">
          <i className="far fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/octavian-david-41b610180/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://stackoverflow.com/users/12143300/octaviandd">
          <i className="fab fa-stack-overflow"></i>
        </a>
      </div>
      <span></span>
    </Hero>
  );
}

const Hero = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    height: 200px;
    display: block;
    width: 3px;
    background-color: #9900fa;
  }

  a {
    transition: all 0.3s ease-in-out;
    margin-bottom: 15px;
  }

  a:hover {
    transform: translateY(-5px);

    i {
      color: #9900fa;
    }
  }

  a i {
    font-size: 25px;
    color: #eff0f1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
