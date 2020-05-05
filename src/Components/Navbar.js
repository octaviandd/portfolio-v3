/** @format */

import React, { useState, useEffect, useRef } from "react";
import { animated, useSpring, config } from "react-spring";
import styled from "styled-components";
import Menu from "./Menu";
import CollapseMenu from "./CollapseMenu";
import Scrollchor from "react-scrollchor";

export default function Navbar(props) {
  const ref = useRef();
  const [isShowing, show] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // });

  const handleScroll = (e) => {
    let scrollPos = 0;
    const currentScrolltop = ref.current.scrollTop;
    console.log(isShowing);
    if (isShowing && currentScrolltop > scrollPos) {
      show(true);
    } else if (isShowing) {
      show(false);
    }
    scrollPos = currentScrolltop;
  };

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0,0,0)",
    config: config.slow,
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.slow,
  });

  return (
    <React.Fragment>
      <NavBar style={barAnimation} ref={ref} hidden={isShowing}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <li>01.</li>
            <Scrollchor to="#skills">
              <p>Skills</p>
            </Scrollchor>
            <li>02.</li>
            <Scrollchor to="project">
              <p>Projects</p>
            </Scrollchor>
            <li>03.</li>
            <Scrollchor to="contact">
              <p>Contact</p>
            </Scrollchor>
          </NavLinks>
          <BurgerWrapper>
            <Menu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>

      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </React.Fragment>
  );
}

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  background: transparent;
  z-index: 100;
  font-size: 1.1rem;
`;

const FlexContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  margin: auto 0;
  display: flex;
  align-items: center;
  list-style-type: none;

  li {
    color: #9900fa;
    list-style: none;

    @media (max-width: 768px) {
      display: none;
    }
  }

  & p {
    color: #dfe6e9;
    font-weight: 600;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    cursor: pointer;
    padding: 5px 10px;
    &:hover {
      color: #9900fa;
    }
    &:active: {
      color: #9900fa;
    }
    &:focus {
      color: #9900fa;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  a {
    color: transparent;
    list-style: none;
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`;
