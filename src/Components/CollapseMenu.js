/** @format */

import React from "react";
import styled from "styled-components";
import Scrollchor from "react-scrollchor";

import { useSpring, animated } from "react-spring";

function CollapseMenu(props) {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -50, 0, -300],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Scrollchor to="#skills">
              <p onClick={props.handleNavbar}>Skills</p>
            </Scrollchor>
          </li>

          <li>
            <Scrollchor to="#projects">
              <p onClick={props.handleNavbar}>Projects</p>
            </Scrollchor>
          </li>

          <li>
            <Scrollchor to="#contact">
              <p onClick={props.handleNavbar}>Contact</p>
            </Scrollchor>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
}

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #9900fa;
  position: fixed;
  top: 5.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
