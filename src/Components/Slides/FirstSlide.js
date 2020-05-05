/** @format */

import React from "react";
import DetailsContainer from "../DetailsContainer";
import styled from "styled-components";
import foam from "../../foam4.svg";

export default function FirstSlide() {
  return (
    <React.Fragment>
      <Hero>
        <DetailsContainer img={foam}></DetailsContainer>
      </Hero>
    </React.Fragment>
  );
}

const Hero = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
