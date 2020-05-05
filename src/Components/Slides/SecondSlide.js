/** @format */

import React from "react";
import styled from "styled-components";
import SkillsContainer from "../SkillsContainer";

import { animated, useSpring, config } from "react-spring";

export default function SecondSlide() {
  const linkAnimation1 = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.slow,
  });
  return (
    <Hero style={linkAnimation1}>
      <SkillsContainer></SkillsContainer>
    </Hero>
  );
}

const Hero = styled(animated.div)`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
