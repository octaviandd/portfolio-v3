/** @format */

import React from "react";
import styled from "styled-components";

import { animated, useSpring, config } from "react-spring";

export default function DetailsContainer({ img }) {
  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.slow,
  });

  const linkAnimation2 = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 1200,
    config: config.slow,
  });

  const linkAnimation3 = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 1400,
    config: config.slow,
  });

  const linkAnimation4 = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 1600,
    config: config.slow,
  });

  return (
    <Hero img={img && img}>
      <Paragraph1 style={linkAnimation}>Hi my name is</Paragraph1>
      <Header style={linkAnimation2}>Octavian David.</Header>
      <SmallerHead style={linkAnimation3}>Software Developer</SmallerHead>
      <Paragraph2 style={linkAnimation4}>
        I'm a passionate and flexible software developer, having skills within
        the front-end and the back-end technologies, that aims at building
        eye-catching products.
      </Paragraph2>
      <Span style={linkAnimation4}>
        <a href="mailto: octaviandavid@yahoo.com">Get in touch</a>
      </Span>
    </Hero>
  );
}

const Paragraph1 = styled(animated.p)``;
const Paragraph2 = styled(animated.p)``;
const Span = styled(animated.span)``;
const Header = styled(animated.h1)``;

const SmallerHead = styled(animated.h3)``;

const Hero = styled(animated.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-image: url(${(props) => props.img});
  background-size: contain;
  height: 66vh;
  background-repeat: no-repeat;

  a{
    padding: 15px 30px;
    text-decoration: none;
    border: 2px solid #9900fa;
    display: inline-block;
    display: -moz-inline-stack;
    color: #9900fa;
    margin-top: 40px;
    font-weight: 600;
    transition: all 0.2s ease-in-out;

    &:hover{
      background-color: rgba(153,0,250,0.1);
    }
  }
  

  h1 {
    letter-spacing: 2px;
    color: #eff0f1;
    font-size: 70px;
  }

  h3 {
    color: #9900fa;
    margin-top: 0.35rem;
    margin-bottom: 4rem;
    font-size: 50px;
  }

  p:nth-child(1) {
    color: #9900fa;
  }

  p {
    text-align: left;
    color: rgba(239, 240, 241, 0.7);
    font-size: 18px;
    width: 70%;
  }

  @media (max-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    
    a{display: none}

    h1 {
      font-size: 58px;
    }

    h3 {
      font-size: 38px;
    }

    p {
      font-size: 15px;
    
  }
`;
