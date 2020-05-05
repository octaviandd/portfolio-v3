/** @format */

import React from "react";
import styled from "styled-components";

export default function ProjectModal() {
  return <Hero></Hero>;
}

const Hero = styled.div`
  position: absolute;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 750px;
  background-color: rgba(23, 23, 23);
  border: 1px solid white;
`;
